import { hotelApi } from './../../modules/hotelList/api/hotelList';
import { configureStore } from '@reduxjs/toolkit';
import { hotelFiltersSlice } from '../../modules/hotelFilters/hotelFiltersSlice';

export const store = configureStore({
  reducer: {
    hotelFilters: hotelFiltersSlice.reducer,
    [hotelApi.reducerPath]: hotelApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelApi.middleware),
});
