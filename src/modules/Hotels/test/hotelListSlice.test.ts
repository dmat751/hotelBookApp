import { Hotel } from './../types/Hotel';
import { HotelsSliceState } from '../types/HotelsSliceState';
import { fetchHotels } from '../actions/fetchHotels';
import {
  fetchData,
  getHotelsFailure,
  getHotelsSuccess,
  hotelsActions,
  hotelsSlice,
  initialState,
} from '../Slice';

describe('test hotels slice', () => {
  it('test fetchData reducer', () => {
    const expectedResult: HotelsSliceState = {
      hotels: [],
      isError: false,
      status: 'pending',
      errorMessage: '',
    };
    expect(hotelsSlice.reducer(initialState, fetchData())).toEqual(
      expectedResult
    );
  });

  it('test getHotelsSuccess reducer', async () => {
    const hotels: Hotel[] = await fetchHotels();
    const expectedState: HotelsSliceState = {
      hotels: hotels,
      status: 'resolved',
      errorMessage: '',
      isError: false,
    };
    expect(hotelsSlice.reducer(initialState, getHotelsSuccess(hotels))).toEqual(
      expectedState
    );
  });

  it('test getHotelsFailure reducer', async () => {
    const expectedResult: HotelsSliceState = {
      status: 'resolved',
      isError: true,
      errorMessage: 'test error!!!',
      hotels: [],
    };
    expect(
      hotelsSlice.reducer(initialState, getHotelsFailure('test error!!!'))
    ).toEqual(expectedResult);
  });

  const cases: string[] = ['fetchData', 'fetchSuccess', 'fetchFailure'];
  test.each<string>(cases)('%s should exist in Hotels reducer', (propName) => {
    expect(Object.prototype.hasOwnProperty.call(hotelsActions, propName)).toBe(
      true
    );
  });
});
