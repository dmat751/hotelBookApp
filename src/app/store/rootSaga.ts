import { hotelsSagas } from '@/modules/Hotels/saga';
import { all, fork } from 'redux-saga/effects';

const combinedSagas = [fork(hotelsSagas)];

export default function* rootSaga() {
  yield all(combinedSagas);
}
