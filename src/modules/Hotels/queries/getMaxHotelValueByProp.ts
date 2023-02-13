import type { Hotel } from '../types/Hotel';

const DEFAULT_MAX_VALUE = 0;

export const getMaxHotelValueByProp = (
  hotelList: Hotel[],
  prop: 'maxChildren' | 'maxAdults'
) => {
  const maxValue = hotelList
    .map((hotel) =>
      hotel.roomsDetails.rooms.map(
        (room) => room?.occupancy?.[prop] ?? DEFAULT_MAX_VALUE
      )
    )
    .flat();

  return Math.max(...maxValue) || DEFAULT_MAX_VALUE;
};
