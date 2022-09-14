import { createSelector } from '@reduxjs/toolkit';
import { selectAllHotelList } from './allHotelListSelector';
import { getMaxHotelValueByProp } from '../../app/queries/getMaxHotelValueByProp';

export const selectMaxChildrenInHotels = createSelector(
  [selectAllHotelList],
  (hotelList) => getMaxHotelValueByProp(hotelList, 'maxChildren')
);
