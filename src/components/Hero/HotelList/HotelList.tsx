import HotelItem from './HotelItem/HotelItem';
import classes from './HotelList.module.scss';
import baseClasses from './../../../baseClasses.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchHotelListData } from '../../../store/hotelListAction';
import { selectHotelList } from '../../../store/index';
import { Hotel } from '../../../models/Hotel';

let isInitial = true;

const HotelList = () => {
  const dispatch = useDispatch();
  const hotelListItem = useSelector(selectHotelList);
  const hotelFilters = hotelListItem.filters;
  let filteredHotelList = hotelListItem.hotelList;
  if (!isInitial) {
    filteredHotelList = filteredHotelList.map((hotelItem) => {
      let filteredRoom = hotelItem.roomsDetails.rooms.filter((room) => {
        if (room.occupancy.maxChildren >= hotelFilters.children) {
          return true;
        } else {
          return false;
        }
      });
      const filteredHotel = {
        ...hotelItem,
        roomsDetails: {
          ratePlans: hotelItem.roomsDetails.ratePlans,
          rooms: filteredRoom,
        },
      };
      return filteredHotel;
    });
    console.log(filteredHotelList);
  }

  useEffect(() => {
    dispatch(fetchHotelListData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
  }, []);

  return (
    <div className={classes['list-container']}>
      <ul className={`${classes.list} ${baseClasses['basic-container1']}`}>
        {!isInitial &&
          filteredHotelList.map((hotelItem) => {
            return (
              <li className={classes['list-item']} key={hotelItem.id}>
                <HotelItem hotelItem={hotelItem} />
              </li>
            );
          })}
        {isInitial && <li>Loading data...</li>}
      </ul>
    </div>
  );
};
export default HotelList;
