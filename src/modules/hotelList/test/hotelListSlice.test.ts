import { HotelListSliceState } from './../../../app/types/hotel';
import { fetchHotelList } from '../fetchHotelList';
import { Hotel } from '../../../app/types/hotel';
import {
  fetchData,
  getHotelListFailure,
  getHotelListSuccess,
  hotelListActions,
  hotelListSlice,
  initialState,
} from '../hotelListSlice';

describe('test hotel list slice', () => {
  it('test fetchData reducer', () => {
    const expectedResult: HotelListSliceState = {
      hotelList: [],
      isError: false,
      status: 'pending',
      errorMessage: '',
    };
    expect(hotelListSlice.reducer(initialState, fetchData())).toEqual(
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
      hotelListSlice.reducer(initialState, getHotelListSuccess(hotelList))
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
      hotelListSlice.reducer(initialState, getHotelListFailure('test error!!!'))
    ).toEqual(expectedResult);
  });

  const cases: string[] = ['fetchData', 'fetchSuccess', 'fetchFailure'];
  test.each<string>(cases)(
    '%s should exist in hotelList reducer',
    (propName) => {
      expect(
        Object.prototype.hasOwnProperty.call(hotelListActions, propName)
      ).toBe(true);
    }
  );
});
