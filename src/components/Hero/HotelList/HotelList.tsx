import { Hotel } from '../../../models/Hotel';
import HotelItem from './HotelItem/HotelItem';
import classes from './HotelList.module.scss';
import baseClasses from './../../../baseClasses.module.scss';

const HotelList: React.FC<{ hotelList: Hotel[] }> = (props) => {
  return (
    <div className={classes['list-container']}>
      <ul className={`${classes.list} ${baseClasses['basic-container1']}`}>
        {props.hotelList.map((hotelItem) => {
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
