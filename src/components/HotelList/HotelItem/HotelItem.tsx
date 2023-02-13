import type { Hotel } from '../../../modules/hotelList/types/hotel';
import { HotelItemHero } from './HotelItemHero/HotelItemHero';
import { HotelItemRoom } from './HotelItemRoom/HotelItemRoom';

type Props = Readonly<{ hotelItem: Hotel }>;
export const HotelItem = ({ hotelItem }: Props) => (
  <li
    className="mb-[50px]"
    data-testid={`hotel-item-${hotelItem.id}`}
    key={hotelItem.id}
  >
    <div className="p-[20px] bg-[#e7e7e7]">
      <HotelItemHero hotelItem={hotelItem} />
      <ul>
        {hotelItem.roomsDetails.rooms.map((roomItem) => (
          <HotelItemRoom
            key={roomItem.id}
            room={roomItem}
            dataTestId={`room-item-${hotelItem.id}-${roomItem.id}`}
          />
        ))}
      </ul>
    </div>
  </li>
);
