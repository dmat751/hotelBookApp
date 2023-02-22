import { fetchHotels } from '@/modules/Hotels/actions/fetchHotels';
import {
  fetchedHotelsSuccess,
  fetchedHotelsFailed,
  hotelsActions,
} from '@/modules/Hotels/slice';
import type { Hotel } from '@/modules/Hotels/types/Hotel';
import { call, put, takeLatest } from 'redux-saga/effects';

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
