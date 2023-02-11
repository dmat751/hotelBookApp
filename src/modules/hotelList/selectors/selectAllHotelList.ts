import { selectHotelFilters } from '../../hotelFilters/hotelFiltersSelectors';
import { Hotel } from '../types/hotel';
import { createSelector } from '@reduxjs/toolkit';
import { hotelApi } from '../api/hotelListApiSlice';

export const selectAllHotelList = createSelector(
  [hotelApi.endpoints.getHotelList.select()],
  (hotelList) => hotelList.data ?? []
);
