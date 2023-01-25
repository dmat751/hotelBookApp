import { Hotel } from '../types/hotel';

export const getHotelFilterMaxValueByProp = (
  hotelList: Hotel[],
  prop: 'maxChildren' | 'maxAdults'
) => {
  const childrenMaxes = hotelList
    .map((hotel) =>
      hotel.roomsDetails.rooms.map((room) => room?.occupancy?.[prop] ?? 0)
    )
    .flat();

  return childrenMaxes.length > 0 ? Math.max(...childrenMaxes) : 0;
};
