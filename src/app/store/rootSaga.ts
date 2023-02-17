import { all, fork } from 'redux-saga/effects';
import { hotelListSagas } from '../../modules/Hotels/Saga';

const combinedSagas = [fork(hotelListSagas)];

export default function* rootSaga() {
  yield all(combinedSagas);
}
