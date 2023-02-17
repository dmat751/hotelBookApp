import { hotelFiltersSlice, hotelFiltersSliceInitialState } from './../Slice';
import { setAdultsFilter, setChildrenFilter, setStarsFilter } from '../Slice';

describe('test setAdultsFilter reducer', () => {
  it('test ADD option', () => {
    //given
    //when
    const expectedResult = {
      ...hotelFiltersSliceInitialState,
      adults: hotelFiltersSliceInitialState.adults + 1,
    };

    //then
    expect(
      hotelFiltersSlice.reducer(
        hotelFiltersSliceInitialState,
        setAdultsFilter('ADD')
      )
    ).toEqual(expectedResult);
  });

  it('test SUB option', () => {
    //given
    //when
    const expectedResult = {
      ...hotelFiltersSliceInitialState,
      adults: hotelFiltersSliceInitialState.adults - 1,
    };

    //then
    expect(
      hotelFiltersSlice.reducer(
        hotelFiltersSliceInitialState,
        setAdultsFilter('SUB')
      )
    ).toEqual(expectedResult);
  });
});

describe('test setChildrenFilter reducer', () => {
  it('test ADD option', () => {
    //given
    //when
    const expectedResult = {
      ...hotelFiltersSliceInitialState,
      children: hotelFiltersSliceInitialState.children + 1,
    };

    //then
    expect(
      hotelFiltersSlice.reducer(
        hotelFiltersSliceInitialState,
        setChildrenFilter('ADD')
      )
    ).toEqual(expectedResult);
  });

  it('test SUB option', () => {
    //given
    //when
    const expectedResult = {
      ...hotelFiltersSliceInitialState,
      children: hotelFiltersSliceInitialState.children - 1,
    };

    //then
    expect(
      hotelFiltersSlice.reducer(
        hotelFiltersSliceInitialState,
        setChildrenFilter('SUB')
      )
    ).toEqual(expectedResult);
  });
});

describe('test setStarsFilter reducer', () => {
  it('should be 3', () => {
    //given
    //when
    const expectedResult = {
      ...hotelFiltersSliceInitialState,
      stars: 3,
    };

    //then
    expect(
      hotelFiltersSlice.reducer(
        hotelFiltersSliceInitialState,
        setStarsFilter(3)
      )
    ).toEqual(expectedResult);
  });
});
