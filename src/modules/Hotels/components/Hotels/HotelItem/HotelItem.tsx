import type { Hotel } from '../../../types/Hotel';
import { HotelHero } from './HotelHero/HotelHero';
import { HotelRoom } from './HotelRoom/HotelRoom';

type Props = Readonly<{ hotelItem: Hotel }>;

export const HotelItem = ({ hotelItem }: Props) => {
  const { id } = hotelItem;

  return (
    <li className="mb-[50px]" data-testid={`hotel-item-${id}`} key={id}>
      <div className="p-[20px] bg-[#e7e7e7]">
        <HotelHero hotelItem={hotelItem} />
        <ul>
          {hotelItem.roomsDetails.rooms.map((roomItem) => (
            <HotelRoom
              key={roomItem.id}
              room={roomItem}
              dataTestId={`room-item-${id}-${roomItem.id}`}
            />
          ))}
        </ul>
      </div>
    </li>
  );
};
