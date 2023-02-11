import { createSelector } from '@reduxjs/toolkit';
import { getMaxHotelValueByProp } from '../../app/queries/getMaxHotelValueByProp';
import { selectAllHotelList } from './api/selector';

export const selectMaxChildrenInHotels = createSelector(
  [selectAllHotelList],
  (hotelList) => getMaxHotelValueByProp(hotelList, 'maxChildren')
);
