import { createSelector } from '@reduxjs/toolkit';
import { selectAllHotelList } from './allHotelListSelector';

export const selectMaxAdultsInHotels = createSelector(
  [selectAllHotelList],
  (hotelList) => {
    const adultsMaxes = hotelList
      .map((hotel) =>
        hotel.roomsDetails.rooms.map((room) => room.occupancy.maxAdults)
      )
      .flat();
    return adultsMaxes.length > 0 ? Math.max(...adultsMaxes) : 0;
  }
);
