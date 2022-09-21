import { fetchHotelList } from './fetchHotelList';
import { Hotel } from './../../app/types/hotel';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  getHotelListFailure,
  getHotelListSuccess,
  hotelListActions,
} from './hotelListSlice';

function* hotelListFetchSaga() {
  try {
    const hotelList: Hotel[] = yield call(fetchHotelList);
    yield put(getHotelListSuccess(hotelList));
  } catch (error: unknown) {
    const errorMsg =
      error instanceof Error ? error.message : 'fetch error, unknown error';
    yield put(getHotelListFailure(errorMsg));
  }
}

export function* hotelListSagas() {
  yield takeEvery(hotelListActions.fetchData, hotelListFetchSaga);
}
