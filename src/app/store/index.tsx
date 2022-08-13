import { configureStore } from '@reduxjs/toolkit';
import hotelListSlice from './hotelListSlice';
import hotelFiltersSlice from './hotelFiltersSlice';
import ApiQueryStatusSlice from './ApiStatusSlice';

const store = configureStore({
  reducer: {
    hotelList: hotelListSlice.reducer,
    hotelFilters: hotelFiltersSlice.reducer,
    apiQueryStatus: ApiQueryStatusSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
export const selectHotelList = (state: RootState) => state.hotelList;
//TODO : dopisać selektor do random photo
export const selectHotelFilters = (state: RootState) => state.hotelFilters;
export const selectApiQueryStatus = (state: RootState) => state.apiQueryStatus;
export default store;
