import { getMaxValueByProp } from './../../../app/queries/getFilterMaxValueByProp';
import { createSelector } from '@reduxjs/toolkit';
import { selectAllHotelList } from './allHotelListSelector';

export const selectMaxAdultsInHotels = createSelector(
  [selectAllHotelList],
  (hotelList) => getMaxValueByProp(hotelList, 'maxAdults')
);
