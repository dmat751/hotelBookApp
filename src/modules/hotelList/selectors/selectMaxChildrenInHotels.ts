import { createSelector } from '@reduxjs/toolkit';
import { getMaxHotelValueByProp } from '../../../app/queries/getMaxHotelValueByProp';
import { selectAllHotelList } from './selectAllHotelList';

export const selectMaxChildrenInHotels = createSelector(
  [selectAllHotelList],
  (hotelList) => getMaxHotelValueByProp(hotelList, 'maxChildren')
);
