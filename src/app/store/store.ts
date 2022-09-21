import { configureStore } from '@reduxjs/toolkit';
import { hotelListSlice } from '../../modules/hotelList/hotelListSlice';
import { hotelFiltersSlice } from '../../modules/hotelFilters/hotelFiltersSlice';
import { ApiQueryStatusSlice } from '../../modules/apiStatus/ApiStatusSlice';
import createSagaMiddleware from 'redux-saga';
import { hotelListSagas } from '../../modules/hotelList/hotelListSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    hotelList: hotelListSlice.reducer,
    hotelFilters: hotelFiltersSlice.reducer,
    apiQueryStatus: ApiQueryStatusSlice.reducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(hotelListSagas);
