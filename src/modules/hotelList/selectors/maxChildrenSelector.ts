import { getHotelFilterMaxValueByProp } from '../../../app/queries/getHotelFilterMaxValueByProp';
import { createSelector } from '@reduxjs/toolkit';
import { selectAllHotelList } from './allHotelListSelector';

export const selectMaxChildrenInHotels = createSelector(
  [selectAllHotelList],
  (hotelList) => getHotelFilterMaxValueByProp(hotelList, 'maxChildren')
);
