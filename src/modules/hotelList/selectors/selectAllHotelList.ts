import { createSelector } from '@reduxjs/toolkit';
import { hotelListApiSlice } from '../api/hotelListApiSlice';

export const selectAllHotelList = createSelector(
  [hotelListApiSlice.endpoints.getHotelList.select()],
  (hotelList) => hotelList.data ?? []
);
