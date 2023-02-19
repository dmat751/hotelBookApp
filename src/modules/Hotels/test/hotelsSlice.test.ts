import { fetchHotels } from '@/modules/Hotels/actions/fetchHotels';
import {
  hotelsSlice,
  initialState,
  fetchedHotels,
  fetchedHotelsSuccess,
  fetchedHotelsFailed,
  hotelsActions,
} from '@/modules/Hotels/slice';
import { Hotel } from '@/modules/Hotels/types/Hotel';
import { HotelsSliceState } from '@/modules/Hotels/types/HotelsSliceState';

describe('test hotels slice', () => {
  it('should return status: "pending"', () => {
    //given
    const expectedResult: HotelsSliceState = {
      hotels: [],
      isError: false,
      status: 'pending',
      errorMessage: '',
    };

    //when
    //then
    expect(hotelsSlice.reducer(initialState, fetchedHotels())).toEqual(
      expectedResult
    );
  });

  it('should return hotels', async () => {
    //given
    const hotels: Hotel[] = await fetchHotels();
    const expectedState: HotelsSliceState = {
      hotels: hotels,
      status: 'resolved',
      errorMessage: '',
      isError: false,
    };

    //when
    //then
    expect(
      hotelsSlice.reducer(initialState, fetchedHotelsSuccess(hotels))
    ).toEqual(expectedState);
  });

  it('should return error message', async () => {
    //given
    const expectedResult: HotelsSliceState = {
      status: 'resolved',
      isError: true,
      errorMessage: 'test error!!!',
      hotels: [],
    };

    //when
    //then
    expect(
      hotelsSlice.reducer(initialState, fetchedHotelsFailed('test error!!!'))
    ).toEqual(expectedResult);
  });

  //given
  const cases: string[] = ['fetchData', 'fetchSuccess', 'fetchFailure'];
  test.each<string>(cases)('%s should exist in Hotels reducer', (propName) => {
    //when
    //then
    expect(Object.prototype.hasOwnProperty.call(hotelsActions, propName)).toBe(
      true
    );
  });
});
