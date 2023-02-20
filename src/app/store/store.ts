import rootSaga from '@store/rootSaga';
import { hotelFiltersSlice } from '@/modules/HotelFilters/slice';
import { hotelsSlice } from '@/modules/Hotels/slice';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

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
