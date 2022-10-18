import {
  hotelFiltersSlice,
  initialState,
  setAdultsFilter,
  setChildrenFilter,
  setStarsFilter,
} from '../hotelFiltersSlice';

describe('test setAdultsFilter reducer', () => {
  it('test ADD option', () => {
    const expectedResult = {
      ...initialState,
      adults: initialState.adults + 1,
    };
    expect(
      hotelFiltersSlice.reducer(initialState, setAdultsFilter('ADD'))
    ).toEqual(expectedResult);
  });

  it('test SUB option', () => {
    const expectedResult = {
      ...initialState,
      adults: initialState.adults - 1,
    };
    expect(
      hotelFiltersSlice.reducer(initialState, setAdultsFilter('SUB'))
    ).toEqual(expectedResult);
  });
});

describe('test setChildrenFilter reducer', () => {
  it('test ADD option', () => {
    const expectedResult = {
      ...initialState,
      children: initialState.children + 1,
    };
    expect(
      hotelFiltersSlice.reducer(initialState, setChildrenFilter('ADD'))
    ).toEqual(expectedResult);
  });

  it('test SUB option', () => {
    const expectedResult = {
      ...initialState,
      children: initialState.children - 1,
    };
    expect(
      hotelFiltersSlice.reducer(initialState, setChildrenFilter('SUB'))
    ).toEqual(expectedResult);
  });
});

describe('test setStarsFilter reducer', () => {
  it('should be 3', () => {
    const expectedResult = {
      ...initialState,
      stars: 3,
    };
    expect(hotelFiltersSlice.reducer(initialState, setStarsFilter(3))).toEqual(
      expectedResult
    );
  });
});
