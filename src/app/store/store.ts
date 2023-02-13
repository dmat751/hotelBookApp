import { hotelsApiSlice } from '../../modules/Hotels/api/hotelsApiSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { hotelFiltersSlice } from '../../modules/HotelFilters/hotelFiltersSlice';

export const rootReducer = combineReducers({
  hotelFilters: hotelFiltersSlice.reducer,
  [hotelsApiSlice.reducerPath]: hotelsApiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelsApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
