import { configureStore } from '@reduxjs/toolkit';
import hotelListSlice from '../../modules/HotelList/hotelListSlice';
import hotelFiltersSlice from './hotelFiltersSlice';
import ApiQueryStatusSlice from '../../modules/ApiStatus/ApiStatusSlice';
import {RootState} from "../types/rootState";

const store = configureStore({
  reducer: {
    hotelList: hotelListSlice.reducer,
    hotelFilters: hotelFiltersSlice.reducer,
    apiQueryStatus: ApiQueryStatusSlice.reducer,
  },
});

//TODO : dopisać selektor do random photo
export const selectHotelFilters = (state: RootState) => state.hotelFilters;

export default store;
