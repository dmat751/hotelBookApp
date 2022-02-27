import React from 'react';
import { Hotel } from '../../../models/Hotel';
import classes from './HotelList.module.scss';

const HotelList: React.FC<{ hotelList: Hotel[] }> = (props) => {
  return (
    <ul>
      {props.hotelList.map((hotelItem) => {
        return (
          <React.Fragment key={hotelItem.id}>
            <li>
              hotel ID:{hotelItem.id} star:{hotelItem.starRating}
            </li>
            <ul>
              {hotelItem.roomsDetails.rooms.map((roomItem) => {
                return (
                  <li className={classes['room-item']} key={roomItem.id}>
                    <div className={classes['room-row']}>ID:{roomItem.id}</div>
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
  );
};
export default HotelList;
