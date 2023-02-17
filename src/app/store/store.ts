import { configureStore } from '@reduxjs/toolkit';
import { hotelsSlice } from '../../modules/Hotels/Slice';
import { hotelFiltersSlice } from '../../modules/HotelFilters/Slice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    hotels: hotelsSlice.reducer,
    hotelFilters: hotelFiltersSlice.reducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
