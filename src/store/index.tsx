import { configureStore } from '@reduxjs/toolkit';
import hotelListSlice from './hotelListSlice';
import hotelFiltersSlice from './hotelFiltersSlice';

const store = configureStore({
  reducer: {
    hotelList: hotelListSlice.reducer,
    hotelFilters: hotelFiltersSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
export const selectHotelList = (state: RootState) => state.hotelList;
export const selectHotelFilters = (state: RootState) => state.hotelFilters;
export default store;
