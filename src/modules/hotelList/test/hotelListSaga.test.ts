import { fetchHotelList } from '../fetchHotelList';
import { testSaga, expectSaga } from 'redux-saga-test-plan';
import { hotelListFetchSaga } from '../hotelListSaga';
import { initialState } from '../hotelListSlice';

describe('test hotelListSagas', () => {
  it('test success fetch api data', () => {
    testSaga(hotelListFetchSaga)
      .next()
      .call(fetchHotelList)
      .next()
      .put({ type: 'hotelList/getHotelListSuccess', payload: undefined })
      .next()
      .isDone();
  });

  it('test failed fetch api data', () => {
    testSaga(hotelListFetchSaga)
      .next()
      .call(fetchHotelList)
      .throw(new Error('test error'))
      .put({ type: 'hotelList/getHotelListFailure', payload: 'test error' })
      .next()
      .isDone();
  });

  it('integration test', async () => {
    const hotelData = await fetchHotelList();
    return expectSaga(hotelListFetchSaga)
      .withState({ initialState })
      .put({ type: 'hotelList/getHotelListSuccess', payload: hotelData })
      .run();
  });
});
