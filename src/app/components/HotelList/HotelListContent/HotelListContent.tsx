import { useSelector } from 'react-redux';
import { selectHotelList } from '../../../../modules/hotelList/hotelListSelector';
import { HotelItem } from '../HotelItem/HotelItem';
import classes from './HotelListContent.module.scss';
import baseClasses from '../../../assets/baseClasses.module.scss';

export const HotelListContent = () => {
  const hotelListItems = useSelector(selectHotelList);
  return (
    <ul className={`${classes.list} ${baseClasses['basic-container1']}`}>
      {hotelListItems.map((hotelItem) => {
        return (
          <li className={classes['list-item']} key={hotelItem.id}>
            <HotelItem hotelItem={hotelItem} />
          </li>
        );
      })}
    </ul>
  );
};
