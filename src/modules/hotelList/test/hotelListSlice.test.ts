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
    expect(hotelListSlice.reducer(initialState, fetchData())).toEqual({
      hotelList: [],
      isError: false,
      isLoading: true,
      errorMessage: '',
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
      errorMessage: '',
    });
  });

  it('test getHotelListFailure reducer', async () => {
    expect(
      hotelListSlice.reducer(initialState, getHotelListFailure('test error!!!'))
    ).toEqual({
      isLoading: false,
      isError: true,
      errorMessage: 'test error!!!',
      hotelList: [],
    });
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
