import { fetchHotels } from '../actions/fetchHotels';
import { testSaga, expectSaga } from 'redux-saga-test-plan';
import { hotelsFetchSaga } from '../saga';
import { getHotelsFailure, getHotelsSuccess, initialState } from '../slice';
import { fetchedHotelsWithRoomsData } from '../../../mocks/hotelsWithRoomsData/hotelsWithRoomsData';

describe('test hotelsSagas', () => {
  it('test success fetch api data', async () => {
    testSaga(hotelsFetchSaga)
      .next()
      .call(fetchHotels)
      .next(fetchedHotelsWithRoomsData)
      .put(getHotelsSuccess(fetchedHotelsWithRoomsData))
      .next()
      .isDone();
  });

  it('test failed fetch api data', () => {
    testSaga(hotelsFetchSaga)
      .next()
      .call(fetchHotels)
      .throw(new Error('test error'))
      .put(getHotelsFailure('test error'))
      .next()
      .isDone();
  });

  it('run saga integration test', async () => {
    const hotelData = await fetchHotels();

    return expectSaga(hotelsFetchSaga)
      .withState({ initialState })
      .put({ type: 'Hotels/getHotelsSuccess', payload: hotelData })
      .run();
  });
});
