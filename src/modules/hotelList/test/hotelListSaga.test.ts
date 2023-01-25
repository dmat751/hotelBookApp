import { fetchHotelList } from '../fetchHotelList';
import { testSaga, expectSaga } from 'redux-saga-test-plan';
import { hotelListFetchSaga } from '../hotelListSaga';
import {
  getHotelListFailure,
  getHotelListSuccess,
  initialState,
} from '../hotelListSlice';
import { fetchedHotelsWithRoomsData } from '../../../mocks/hotelsWithRoomsData/hotelsWithRoomsData';

describe('test hotelListSagas', () => {
  it('test success fetch api data', async () => {
    testSaga(hotelListFetchSaga)
      .next()
      .call(fetchHotelList)
      .next(fetchedHotelsWithRoomsData)
      .put(getHotelListSuccess(fetchedHotelsWithRoomsData))
      .next()
      .isDone();
  });

  it('test failed fetch api data', () => {
    testSaga(hotelListFetchSaga)
      .next()
      .call(fetchHotelList)
      .throw(new Error('test error'))
      .put(getHotelListFailure('test error'))
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
