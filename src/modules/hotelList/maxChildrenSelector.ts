import { createSelector } from '@reduxjs/toolkit';
import { selectAllHotelList } from './allHotelListSelector';

export const selectMaxChildrenInHotels = createSelector(
  [selectAllHotelList],
  (hotelList) => {
    const childrenMaxes = hotelList
      .map((hotel) =>
        hotel.roomsDetails.rooms.map((room) => room.occupancy.maxChildren)
      )
      .flat();
    return childrenMaxes.length > 0 ? Math.max(...childrenMaxes) : 0;
  }
);
