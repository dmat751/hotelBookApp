import { Room } from '../../../../types/room';
import classes from './HotelItemRoom.module.scss';

type Props = Readonly<{ room: Room }>;
export const HotelItemRoom = ({ room }: Props) => (
  <div className={classes.item}>
    <div className={classes.header}>
      <h5>{room.name}</h5>
      <h6>Adults: {room.occupancy.maxAdults}</h6>
      <h6>Children: {room.occupancy.maxChildren}</h6>
    </div>
    <div className={classes.desc}>
      <p>{room.longDescription}</p>
    </div>
  </div>
);
