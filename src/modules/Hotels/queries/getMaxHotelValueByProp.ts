import type { Hotel } from '@/modules/Hotels/types/Hotel';

const DEFAULT_MAX_VALUE = 0;

export const getMaxHotelValueByProp = (
  hotels: Hotel[],
  prop: 'maxChildren' | 'maxAdults'
) => {
  const values = hotels
    .map((hotel) =>
      hotel.roomsDetails.rooms.map(
        (room) => room?.occupancy?.[prop] ?? DEFAULT_MAX_VALUE
      )
    )
    .flat();

  return values.length ? Math.max(...values) : DEFAULT_MAX_VALUE;
};
