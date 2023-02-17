import { Hotel } from './types/Hotel';
import { fetchHotelList } from './actions/fetchHotelList';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getHotelListFailure,
  getHotelListSuccess,
  hotelListActions,
} from './Slice';

export function* hotelListFetchSaga() {
  try {
    const hotelList: Hotel[] = yield call(fetchHotelList);
    yield put(getHotelListSuccess(hotelList));
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'fetch error, unknown error';
    yield put(getHotelListFailure(errorMsg));
  }
}

export function* hotelListSagas() {
  yield takeLatest(hotelListActions.fetchData, hotelListFetchSaga);
}
