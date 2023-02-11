import { Hotel } from '../types/hotel';

export const getMaxHotelValueByProp = (
  hotelList: Hotel[],
  prop: 'maxChildren' | 'maxAdults'
) => {
  const maxValue = hotelList
    .map((hotel) =>
      hotel.roomsDetails.rooms.map((room) => room?.occupancy?.[prop] ?? 0)
    )
    .flat();

  return Math.max(...maxValue) || 0;
};
