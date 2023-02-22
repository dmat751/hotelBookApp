import { HotelHero } from '@/modules/Hotels/components/Hotels/HotelItem/HotelHero/HotelHero';
import { HotelRoom } from '@/modules/Hotels/components/Hotels/HotelItem/HotelRoom/HotelRoom';
import type { Hotel } from '@/modules/Hotels/types/Hotel';
import { useMemo } from 'react';

type Props = Readonly<{ hotelItem: Hotel }>;

export const HotelItem = ({ hotelItem }: Props) => {
  const { id } = hotelItem;

  const rooms = useMemo(
    () =>
      hotelItem.roomsDetails.rooms.map((roomItem) => (
        <HotelRoom
          key={roomItem.id}
          room={roomItem}
          dataTestId={`room-item-${id}-${roomItem.id}`}
        />
      )),
    [id, hotelItem.roomsDetails.rooms]
  );

  return (
    <li className="mb-[50px]" data-testid={`hotel-item-${id}`} key={id}>
      <div className="p-[20px] bg-[#e7e7e7]">
        <HotelHero hotelItem={hotelItem} />
        <ul>{rooms}</ul>
      </div>
    </li>
  );
};
