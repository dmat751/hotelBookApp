import { selectFilteredHotels } from './selectFilteredHotelList';
import { createSelector } from '@reduxjs/toolkit';

export const selectMaxAdultsInHotels = createSelector(
  [selectFilteredHotels],
  (hotelList) => hotelList.length
);
