import { Hotel } from '../../modules/hotelList/types/hotel';

export const getMaxHotelValueByProp = (
  hotelList: Hotel[],
  prop: 'maxChildren' | 'maxAdults'
) => {
  const childrenMaxes = hotelList
    .map((hotel) =>
      hotel.roomsDetails.rooms.map((room) => room?.occupancy?.[prop] ?? 0)
    )
    .flat();

  return Math.max(...childrenMaxes) || 0;
};
