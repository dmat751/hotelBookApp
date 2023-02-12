import { hotelListApiSlice } from '../../modules/hotelList/api/hotelListApiSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { hotelFiltersSlice } from '../../modules/hotelFilters/hotelFiltersSlice';

export const rootReducer = combineReducers({
  hotelFilters: hotelFiltersSlice.reducer,
  [hotelListApiSlice.reducerPath]: hotelListApiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelListApiSlice.middleware),
});
