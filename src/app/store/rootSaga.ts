import { all, fork } from 'redux-saga/effects';
import { hotelsSagas } from '../../modules/Hotels/Saga';

const combinedSagas = [fork(hotelsSagas)];

export default function* rootSaga() {
  yield all(combinedSagas);
}
