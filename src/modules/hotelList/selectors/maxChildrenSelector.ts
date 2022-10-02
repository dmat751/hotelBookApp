import { getMaxValueByProp } from './../../../app/queries/getFilterMaxValueByProp';
import { createSelector } from '@reduxjs/toolkit';
import { selectAllHotelList } from './allHotelListSelector';

export const selectMaxChildrenInHotels = createSelector(
  [selectAllHotelList],
  (hotelList) => getMaxValueByProp(hotelList, 'maxChildren')
);
