import { hotelApi } from './../../modules/hotelList/api/hotelList';
import { configureStore } from '@reduxjs/toolkit';
import { hotelListSlice } from '../../modules/hotelList/hotelListSlice';
import { hotelFiltersSlice } from '../../modules/hotelFilters/hotelFiltersSlice';

export const store = configureStore({
  reducer: {
    hotelList: hotelListSlice.reducer,
    hotelFilters: hotelFiltersSlice.reducer,
    [hotelApi.reducerPath]: hotelApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelApi.middleware),
});
