import { Hotel } from '../../../types/hotel';
import classes from './HotelItem.module.scss';
import { HotelItemHero } from './HotelItemHero/HotelItemHero';
import { HotelItemRoom } from './HotelItemRoom/HotelItemRoom';

type Props = Readonly<{ hotelItem: Hotel }>;
export const HotelItem = ({ hotelItem }: Props) => (
  <div className={classes.item}>
    <HotelItemHero hotelItem={hotelItem} />
    <ul>
      {hotelItem.roomsDetails.rooms.map((roomItem) => (
        <HotelItemRoom key={roomItem.id} room={roomItem} />
      ))}
    </ul>
  </div>
);
