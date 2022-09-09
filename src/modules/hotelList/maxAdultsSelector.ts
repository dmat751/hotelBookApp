import { createSelector } from '@reduxjs/toolkit';
import { selectAllHotelList } from './allHotelListSelector';

export const selectMaxAdultsInHotels = createSelector(
  [selectAllHotelList],
  (hotelList) => {
    const adultsMaxes = hotelList
      .map(({ roomsDetails }) =>
        roomsDetails.rooms.map(({ occupancy }) => occupancy.maxAdults)
      )
      .flat();
    return adultsMaxes.length > 0 ? Math.max(...adultsMaxes) : 0;
  }
);
