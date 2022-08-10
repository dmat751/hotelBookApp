import { Room } from '../../../../../types/room';
import classes from './HotelItemRoom.module.scss';

const HotelItemRoom: React.FC<{ room: Room }> = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.header}>
        <h5>{props.room.name}</h5>
        <h6>Adults: {props.room.occupancy.maxAdults}</h6>
        <h6>Children: {props.room.occupancy.maxChildren}</h6>
      </div>
      <div className={classes.desc}>
        <p>{props.room.longDescription}</p>
      </div>
    </div>
  );
};
export default HotelItemRoom;
