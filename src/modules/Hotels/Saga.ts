import { Hotel } from './types/Hotel';
import { fetchHotels } from './actions/fetchHotels';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchedHotelsFailure as fetchedHotelsFailed,
  fetchedHotelsSuccess,
  hotelsActions,
} from './slice';

export function* hotelsFetchSaga() {
  try {
    const hotels: Hotel[] = yield call(fetchHotels);
    yield put(fetchedHotelsSuccess(hotels));
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'fetch error, unknown error';
    yield put(fetchedHotelsFailed(errorMsg));
  }
}

export function* hotelsSagas() {
  yield takeLatest(hotelsActions.fetchData, hotelsFetchSaga);
}
