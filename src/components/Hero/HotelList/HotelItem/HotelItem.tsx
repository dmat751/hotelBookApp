import { Hotel } from '../../../../models/Hotel';
import classes from './HotelItem.module.scss';

const HotelItem: React.FC<{ hotelItem: Hotel }> = (props) => {
  const hotelItem = props.hotelItem;
  return (
    <div>
      ID:{hotelItem.id} star: {hotelItem.starRating}
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
    </div>
  );
};
export default HotelItem;
