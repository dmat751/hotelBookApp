import { createSelector } from '@reduxjs/toolkit';
import { selectAllHotelList } from './allHotelListSelector';

export const selectMaxHotelStars = createSelector(
  [selectAllHotelList],
  (hotelList) => {
    const starsMaxes = hotelList.map((hotel) => hotel.starRating);
    const defaultMaxStarsValue = 5;

    return starsMaxes.length > 0
      ? Math.max(...starsMaxes)
      : defaultMaxStarsValue;
  }
);
