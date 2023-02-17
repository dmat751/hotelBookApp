import { Hotel } from './../types/Hotel';
import { HotelListSliceState } from './../types/HotelListSliceState';
import { fetchHotelList } from '../actions/fetchHotelList';
import {
  fetchData,
  getHotelListFailure,
  getHotelListSuccess,
  hotelListActions,
  hotelsSlice,
  initialState,
} from '../Slice';

describe('test hotel list slice', () => {
  it('test fetchData reducer', () => {
    const expectedResult: HotelListSliceState = {
      hotelList: [],
      isError: false,
      status: 'pending',
      errorMessage: '',
    };
    expect(hotelsSlice.reducer(initialState, fetchData())).toEqual(
      expectedResult
    );
  });

  it('test getHotelListSuccess reducer', async () => {
    const hotelList: Hotel[] = await fetchHotelList();
    const expectedState: HotelListSliceState = {
      hotelList: hotelList,
      status: 'resolved',
      errorMessage: '',
      isError: false,
    };
    expect(
      hotelsSlice.reducer(initialState, getHotelListSuccess(hotelList))
    ).toEqual(expectedState);
  });

  it('test getHotelListFailure reducer', async () => {
    const expectedResult: HotelListSliceState = {
      status: 'resolved',
      isError: true,
      errorMessage: 'test error!!!',
      hotelList: [],
    };
    expect(
      hotelsSlice.reducer(initialState, getHotelListFailure('test error!!!'))
    ).toEqual(expectedResult);
  });

  const cases: string[] = ['fetchData', 'fetchSuccess', 'fetchFailure'];
  test.each<string>(cases)('%s should exist in Hotels reducer', (propName) => {
    expect(
      Object.prototype.hasOwnProperty.call(hotelListActions, propName)
    ).toBe(true);
  });
});
