import React, { useEffect, useState } from 'react';
import { Hotel } from '../../../models/Hotel';
import { RoomsDetails } from '../../../models/Room';
import PromisePool from '@supercharge/promise-pool';
import classes from './HotelList.module.scss';

const getHotelList = async (): Promise<Hotel[]> => {
  const listResp = await fetch(
    'https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG'
  );
  return await listResp.json();
};

const getRoomList = async (id: string): Promise<RoomsDetails> => {
  const dataResp = await fetch(
    'https://obmng.dbm.guestline.net/api/roomRates/OBMNG/' + id
  );
  return await dataResp.json();
};

const HotelList: React.FC<{ dummyVar: string }> = (props) => {
  const [hotelsData, sethotelsData] = useState<Hotel[]>([]);

  useEffect(() => {
    const getData = async () => {
      const hotelList = await getHotelList();

      const roomList = await PromisePool.withConcurrency(5)
        .for(hotelList)
        .process(async (hotelItem) => {
          return (hotelItem.roomsDetails = await getRoomList(hotelItem.id));
        });
      // console.log(hotelList);
      sethotelsData(hotelList);
    };
    getData();
  }, []);

  return (
    <React.Fragment>
      <ul>
        {hotelsData.map((hotelItem) => {
          return (
            <React.Fragment key={hotelItem.id}>
              <li>
                hotel ID:{hotelItem.id} star:{hotelItem.starRating}
              </li>
              <ul>
                {hotelItem.roomsDetails.rooms.map((roomItem) => {
                  return (
                    <li className={classes['room-item']} key={roomItem.id}>
                      <div className={classes['room-row']}>
                        ID:{roomItem.id}
                      </div>
                      <div className={classes['room-row']}>
                        maxAdults:{roomItem.occupancy.maxAdults}
                      </div>
                      <div className={classes['room-row']}>
                        maxChildren:{roomItem.occupancy.maxChildren}
                      </div>
                      <div className={classes['room-row']}>
                        maxOverall:{roomItem.occupancy.maxOverall}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </React.Fragment>
          );
        })}
      </ul>
    </React.Fragment>
  );
};
export default HotelList;
