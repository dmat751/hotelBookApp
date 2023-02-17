import { Hotel } from './types/Hotel';
import { fetchHotels } from './actions/fetchHotels';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getHotelsFailure, getHotelsSuccess, hotelsActions } from './Slice';

export function* hotelsFetchSaga() {
  try {
    const hotels: Hotel[] = yield call(fetchHotels);
    yield put(getHotelsSuccess(hotels));
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'fetch error, unknown error';
    yield put(getHotelsFailure(errorMsg));
  }
}

export function* hotelsSagas() {
  yield takeLatest(hotelsActions.fetchData, hotelsFetchSaga);
}
