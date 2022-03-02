import { Hotel } from '../../../../models/Hotel';
import classes from './HotelItem.module.scss';
import HotelItemHero from './HotelItemHero/HotelItemHero';
import HotelItemRoom from './HotelItemRoom/HotelItemRoom';

const HotelItem: React.FC<{ hotelItem: Hotel }> = (props) => {
  const hotelItem = props.hotelItem;
  return (
    <div className={classes.item}>
      <HotelItemHero hotelItem={props.hotelItem} />
      <ul>
        {hotelItem.roomsDetails.rooms.map((roomItem) => {
          return <HotelItemRoom key={roomItem.id} room={roomItem} />;
        })}
      </ul>
    </div>
  );
};
export default HotelItem;
