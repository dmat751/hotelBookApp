import { hotelFiltersSlice, initialState } from '../slice';
import { setAdultsFilter, setChildrenFilter, setStarsFilter } from '../slice';

describe('test setAdultsFilter reducer', () => {
  it('test ADD option', () => {
    //given
    //when
    const expectedResult = {
      ...initialState,
      adults: initialState.adults + 1,
    };

    //then
    expect(
      hotelFiltersSlice.reducer(initialState, setAdultsFilter('ADD'))
    ).toEqual(expectedResult);
  });

  it('test SUB option', () => {
    //given
    //when
    const expectedResult = {
      ...initialState,
      adults: initialState.adults - 1,
    };

    //then
    expect(
      hotelFiltersSlice.reducer(initialState, setAdultsFilter('SUB'))
    ).toEqual(expectedResult);
  });
});

describe('test setChildrenFilter reducer', () => {
  it('test ADD option', () => {
    //given
    //when
    const expectedResult = {
      ...initialState,
      children: initialState.children + 1,
    };

    //then
    expect(
      hotelFiltersSlice.reducer(initialState, setChildrenFilter('ADD'))
    ).toEqual(expectedResult);
  });

  it('test SUB option', () => {
    //given
    //when
    const expectedResult = {
      ...initialState,
      children: initialState.children - 1,
    };

    //then
    expect(
      hotelFiltersSlice.reducer(initialState, setChildrenFilter('SUB'))
    ).toEqual(expectedResult);
  });
});

describe('test setStarsFilter reducer', () => {
  it('should be 3', () => {
    //given
    //when
    const expectedResult = {
      ...initialState,
      stars: 3,
    };

    //then
    expect(hotelFiltersSlice.reducer(initialState, setStarsFilter(3))).toEqual(
      expectedResult
    );
  });
});
