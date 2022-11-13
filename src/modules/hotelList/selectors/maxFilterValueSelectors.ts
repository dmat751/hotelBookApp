import { getHotelFilterMaxValueByProp } from '../../../app/queries/getHotelFilterMaxValueByProp';
import { createSelector } from '@reduxjs/toolkit';
import { selectAllHotelList } from './allHotelListSelector';

export const selectMaxAdultsInHotels = createSelector(
  [selectAllHotelList],
  (hotelList) => getHotelFilterMaxValueByProp(hotelList, 'maxAdults')
);

export const selectMaxChildrenInHotels = createSelector(
  [selectAllHotelList],
  (hotelList) => getHotelFilterMaxValueByProp(hotelList, 'maxChildren')
);

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
