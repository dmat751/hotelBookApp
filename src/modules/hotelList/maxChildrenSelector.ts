import { HotelList } from './../../app/components/HotelList/HotelList';
import { createSelector } from '@reduxjs/toolkit';
import { selectAllHotelList } from './allHotelListSelector';
import { Hotel } from '../../app/types/hotel';

export const selectMaxChildrenInHotels = createSelector(
  [selectAllHotelList],
  (hotelList) => getMaxValueByProp(hotelList, 'maxChildren')
);

const getMaxValueByProp = (
  hotelList: Hotel[],
  prop: 'maxChildren' | 'maxAdults'
) => {
  const childrenMaxes = hotelList
    .map((hotel) =>
      hotel.roomsDetails.rooms.map((room) => room?.occupancy?.[prop] ?? 0)
    )
    .flat();
  return childrenMaxes.length > 0 ? Math.max(...childrenMaxes) : 0;
}; // do queries
