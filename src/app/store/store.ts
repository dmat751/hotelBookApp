import { api } from '../../modules/Hotels/Api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { hotelFiltersSlice } from '../../modules/HotelFilters/Slice';

export const rootReducer = combineReducers({
  hotelFilters: hotelFiltersSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
