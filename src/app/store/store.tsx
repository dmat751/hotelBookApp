import { configureStore } from '@reduxjs/toolkit';
import hotelListSlice from '../../modules/hotelList/hotelListSlice';
import hotelFiltersSlice from '../../modules/hotelFilters/hotelFiltersSlice';
import ApiQueryStatusSlice from '../../modules/apiStatus/ApiStatusSlice';
import {RootState} from "../types/rootState";

const store = configureStore({
  reducer: {
    hotelList: hotelListSlice.reducer,
    hotelFilters: hotelFiltersSlice.reducer,
    apiQueryStatus: ApiQueryStatusSlice.reducer,
  },
});

//TODO : dopisać selektor do random photo


export default store;
