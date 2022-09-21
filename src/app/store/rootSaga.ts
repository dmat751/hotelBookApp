import { all, fork } from 'redux-saga/effects';
import { hotelListSagas } from '../../modules/hotelList/hotelListSaga';

const combinedSagas = [
  fork(hotelListSagas),
  // fork(otherSaga)
];

export default function* rootSaga() {
  yield all(combinedSagas);
}
