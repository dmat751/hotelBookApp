import { fetchHotelList } from './fetchHotelList';
import { Hotel } from './../../app/types/hotel';
import {
  fetchData,
  getHotelListFailure,
  getHotelListSuccess,
  hotelListActions,
  hotelListSlice,
  initialState,
} from './hotelListSlice';

describe('test hotel list slice', () => {
  it('test fetchData reducer', () => {
    expect(hotelListSlice.reducer(initialState, fetchData())).toEqual({
      hotelList: [],
      isError: false,
      isLoading: true,
      errorType: '',
    });
  });

  it('test getHotelListSuccess reducer', async () => {
    const hotelList: Hotel[] = await fetchHotelList();
    expect(
      hotelListSlice.reducer(initialState, getHotelListSuccess(hotelList))
    ).toEqual({
      hotelList: hotelList,
      isError: false,
      isLoading: false,
      errorType: '',
    });
  });

  it('test getHotelListFailure reducer', async () => {
    expect(
      hotelListSlice.reducer(initialState, getHotelListFailure('test error!!!'))
    ).toEqual({
      isLoading: false,
      isError: true,
      errorType: 'test error!!!',
      hotelList: [],
    });
  });

  it('should exist all reducer action', () => {
    expect(
      Object.prototype.hasOwnProperty.call(hotelListActions, 'fetchData')
    ).toBe(true);

    expect(
      Object.prototype.hasOwnProperty.call(hotelListActions, 'fetchSuccess')
    ).toBe(true);

    expect(
      Object.prototype.hasOwnProperty.call(hotelListActions, 'fetchFailure')
    ).toBe(true);
  });
});
