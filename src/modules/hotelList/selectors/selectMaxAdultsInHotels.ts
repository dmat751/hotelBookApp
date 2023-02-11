import { createSelector } from '@reduxjs/toolkit';
import { getMaxHotelValueByProp } from '../../../app/queries/getMaxHotelValueByProp';
import { selectAllHotelList } from './selectAllHotelList';

export const selectMaxAdultsInHotels = createSelector(
  [selectAllHotelList],
  (hotelList) => getMaxHotelValueByProp(hotelList, 'maxAdults')
);
