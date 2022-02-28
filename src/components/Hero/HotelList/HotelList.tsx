import HotelItem from './HotelItem/HotelItem';
import classes from './HotelList.module.scss';
import baseClasses from './../../../baseClasses.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchHotelListData } from '../../../store/hotelListAction';
import { selectHotelList } from '../../../store/index';

const HotelList = () => {
  const dispatch = useDispatch();
  const hotelListItem = useSelector(selectHotelList);
  const hotelFilters = hotelListItem.filters;

  let hotelList = hotelListItem.hotelList.filter((hotelItem) => {
    return hotelItem.starRating >= hotelFilters.stars;
  });

  useEffect(() => {
    dispatch(fetchHotelListData());
  }, [dispatch]);

  return (
    <div className={classes['list-container']}>
      <ul className={`${classes.list} ${baseClasses['basic-container1']}`}>
        {hotelList.map((hotelItem) => {
          return (
            <li className={classes['list-item']} key={hotelItem.id}>
              <HotelItem hotelItem={hotelItem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default HotelList;
