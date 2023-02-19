import { all, fork } from 'redux-saga/effects';
import { hotelsSagas } from '../../modules/Hotels/saga';

const combinedSagas = [fork(hotelsSagas)];

export default function* rootSaga() {
  yield all(combinedSagas);
}
