import { createSelector } from '@reduxjs/toolkit';
import { getMaxHotelValueByProp } from '../../app/queries/getMaxHotelValueByProp';
import { selectAllHotelList } from './api/selector';

export const selectMaxAdultsInHotels = createSelector(
  [selectAllHotelList],
  (hotelList) => getMaxHotelValueByProp(hotelList, 'maxAdults')
);
