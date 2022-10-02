import { all, fork } from 'redux-saga/effects';
import { hotelListSagas } from '../../modules/hotelList/hotelListSaga';

const combinedSagas = [fork(hotelListSagas)];

export default function* rootSaga() {
  yield all(combinedSagas);
}
