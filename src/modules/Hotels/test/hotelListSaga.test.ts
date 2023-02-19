import { fetchHotels } from '../actions/fetchHotels';
import { testSaga, expectSaga } from 'redux-saga-test-plan';
import { fetchedHotelsWithRoomsData } from '@/mocks/hotelsWithRoomsData/hotelsWithRoomsData';
import { hotelsFetchSaga } from '@/modules/Hotels/saga';
import {
  fetchedHotelsSuccess,
  fetchedHotelsFailure,
  initialState,
} from '@/modules/Hotels/slice';

describe('test hotelsSagas', () => {
  it('test success fetch api data', async () => {
    testSaga(hotelsFetchSaga)
      .next()
      .call(fetchHotels)
      .next(fetchedHotelsWithRoomsData)
      .put(fetchedHotelsSuccess(fetchedHotelsWithRoomsData))
      .next()
      .isDone();
  });

  it('test failed fetch api data', () => {
    testSaga(hotelsFetchSaga)
      .next()
      .call(fetchHotels)
      .throw(new Error('test error'))
      .put(fetchedHotelsFailure('test error'))
      .next()
      .isDone();
  });

  it('run saga integration test', async () => {
    const hotelData = await fetchHotels();

    return expectSaga(hotelsFetchSaga)
      .withState({ initialState })
      .put({ type: 'Hotels/fetchedHotelsSuccess', payload: hotelData })
      .run();
  });
});
