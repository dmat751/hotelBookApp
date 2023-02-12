import { hotelApi } from '../../modules/hotelList/api/hotelListApiSlice';
import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { hotelFiltersSlice } from '../../modules/hotelFilters/hotelFiltersSlice';
import { RootState } from './rootState';

const rootReducer = combineReducers({
  hotelFilters: hotelFiltersSlice.reducer,
  [hotelApi.reducerPath]: hotelApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(hotelApi.middleware),
    preloadedState,
  });
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelApi.middleware),
});
