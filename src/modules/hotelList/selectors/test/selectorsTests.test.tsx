import { selectAllHotelList } from '../allHotelListSelector';
import {
  selectErrorType,
  selectIsDataError,
  selectIsDataLoading,
} from '../dataStatusSelectors';
import { Hotel } from '../../../../app/types/hotel';
import { RootState } from '../../../../app/types/rootState';
import { initialState } from '../../../hotelFilters/hotelFiltersSlice';
import validHotelRoomData from '../../../../mocks/hotelWithRoomsData/hotelWithRoomsData.json';
import produce from 'immer';
import { selectFilteredHotelList } from '../filteredHotelListSelector';
import { Room } from '../../../../app/types/room';
import { selectMaxAdultsInHotels } from '../maxAdultsSelector';
import { selectMaxChildrenInHotels } from '../maxChildrenSelector';
import { selectMaxHotelStars } from '../maxHotelStarsSelector';

const castedHotelData: Hotel[] = JSON.parse(JSON.stringify(validHotelRoomData));
let rootState: RootState;

const resetRootState = () => {
  rootState = {
    hotelFilters: initialState,
    hotelList: {
      hotelList: castedHotelData,
      errorMessage: '',
      isError: false,
      isLoading: false,
    },
  };
};

beforeEach(() => {
  resetRootState();
});

describe('test allHotelListSelector', () => {
  it('should return fetched hotelList', () => {
    //given
    //when
    const hotelList = selectAllHotelList(rootState);

    //then
    expect(hotelList).toEqual(castedHotelData);
  });
});

describe('test selectIsDataLoading', () => {
  it('should return correct value (false)', () => {
    //given
    //when
    const selectedValue = selectIsDataLoading(rootState);

    //then
    expect(selectedValue).toBe(false);
  });

  it('should return correct value (true)', () => {
    //given
    //when
    rootState = {
      hotelList: produce(rootState.hotelList, (draft) => {
        draft.isLoading = true;
      }),
      hotelFilters: rootState.hotelFilters,
    };
    const selectedValue = selectIsDataLoading(rootState);

    //then
    expect(selectedValue).toBe(true);
  });
});

describe('test selectErrorType', () => {
  it('should return correct value ("")', () => {
    //given
    //when
    const selectedValue = selectErrorType(rootState);

    //then
    expect(selectedValue).toBe('');
  });

  it('should return correct value (const testErrorMsg)', () => {
    //given
    //when
    const testErrorMsg = 'test error msg';
    rootState = {
      hotelList: produce(rootState.hotelList, (draft) => {
        draft.errorMessage = testErrorMsg;
      }),
      hotelFilters: rootState.hotelFilters,
    };
    const selectedValue = selectErrorType(rootState);

    //then
    expect(selectedValue).toBe(testErrorMsg);
  });
});

describe('test selectIsDataError', () => {
  it('should return correct value (false)', () => {
    //given
    //when
    const selectedValue = selectIsDataError(rootState);

    //then
    expect(selectedValue).toBe(false);
  });

  it('should return correct value (true)', () => {
    //given
    //when
    rootState = {
      hotelList: produce(rootState.hotelList, (draft) => {
        draft.isError = true;
      }),
      hotelFilters: rootState.hotelFilters,
    };
    const selectedValue = selectIsDataError(rootState);

    //then
    expect(selectedValue).toBe(true);
  });
});

describe('test selectFilteredHotelList', () => {
  const isMaxAdultsOccupancyValid = (room: Room, minAdultsValue: number) =>
    room.occupancy.maxAdults >= minAdultsValue;

  const isMaxChildrenOccupancyValid = (room: Room, minChildrenValue: number) =>
    room.occupancy.maxChildren >= minChildrenValue;

  const isHotelStarsVaild = (hotel: Hotel, minStarsValue: number) =>
    hotel.starRating >= minStarsValue;

  const checkIsHotelRoomCorrectFiltered = (
    minAdultsValue: number,
    minChildrenValue: number,
    minStarsValue: number,
    filteredHotels: Hotel[]
  ) => {
    filteredHotels.forEach((hotel) => {
      hotel.roomsDetails.rooms.forEach((room) => {
        const isFiltersValid =
          isMaxAdultsOccupancyValid(room, minAdultsValue) &&
          isMaxChildrenOccupancyValid(room, minChildrenValue) &&
          isHotelStarsVaild(hotel, minStarsValue);
        if (!isFiltersValid) {
          return false;
        }
      });
    });

    return true;
  };

  type testCase = {
    adults: number;
    children: number;
    stars: number;
    expectedHotelLength: number;
  };
  const cases: testCase[] = [
    {
      adults: initialState.adults,
      children: initialState.children,
      stars: initialState.stars,
      expectedHotelLength: 4,
    },
    {
      adults: initialState.adults,
      children: initialState.children,
      stars: 5,
      expectedHotelLength: 2,
    },
    {
      adults: 4,
      children: 4,
      stars: 4,
      expectedHotelLength: 1,
    },
    {
      adults: 2,
      children: 3,
      stars: 3,
      expectedHotelLength: 1,
    },
    {
      adults: 3,
      children: 0,
      stars: 5,
      expectedHotelLength: 0,
    },
  ];

  test.each<testCase>(cases)(
    'test for: %s',
    ({ adults, children, stars, expectedHotelLength }) => {
      //given
      //when
      rootState = {
        hotelList: rootState.hotelList,
        hotelFilters: produce(rootState.hotelFilters, (draft) => {
          draft.adults = adults;
          draft.children = children;
          draft.stars = stars;
        }),
      };
      const filteredHotels = selectFilteredHotelList(rootState);

      //then
      expect(filteredHotels.length).toBe(expectedHotelLength);
      expect(
        checkIsHotelRoomCorrectFiltered(
          rootState.hotelFilters.adults,
          rootState.hotelFilters.children,
          rootState.hotelFilters.stars,
          filteredHotels
        )
      ).toBe(true);
    }
  );
});

describe('test max filter values selectors', () => {
  type testCase = {
    hotelListValue: Hotel[] | 'default';
    selectorToTest: Function;
    expectedResult: number;
    selectorNameForPrint: string;
  };
  const cases: testCase[] = [
    {
      hotelListValue: 'default',
      selectorToTest: selectMaxAdultsInHotels,
      expectedResult: 6,
      selectorNameForPrint: 'selectMaxAdultsInHotels',
    },
    {
      hotelListValue: [],
      selectorToTest: selectMaxAdultsInHotels,
      expectedResult: 0,
      selectorNameForPrint: 'selectMaxAdultsInHotels',
    },
    {
      hotelListValue: 'default',
      selectorToTest: selectMaxChildrenInHotels,
      expectedResult: 4,
      selectorNameForPrint: 'selectMaxChildrenInHotels',
    },
    {
      hotelListValue: [],
      selectorToTest: selectMaxChildrenInHotels,
      expectedResult: 0,
      selectorNameForPrint: 'selectMaxChildrenInHotels',
    },
    {
      hotelListValue: 'default',
      selectorToTest: selectMaxHotelStars,
      expectedResult: 5,
      selectorNameForPrint: 'selectMaxHotelStars',
    },
    {
      hotelListValue: [],
      selectorToTest: selectMaxHotelStars,
      expectedResult: 5,
      selectorNameForPrint: 'selectMaxHotelStars',
    },
  ].map((caseItem) =>
    Object.assign(caseItem, {
      toString: () => {
        const hotelListValueToPrint =
          caseItem.hotelListValue !== 'default' ? 'custom' : 'default';
        return `
        hotelListValue: ${hotelListValueToPrint}
        selector to test: ${caseItem.selectorNameForPrint}
        expected result: ${caseItem.expectedResult}`;
      },
    } as testCase)
  );

  test.each<testCase>(cases)(
    'test for: %s',
    ({ hotelListValue, selectorToTest, expectedResult }) => {
      if (hotelListValue !== 'default') {
        rootState = {
          hotelList: produce(rootState.hotelList, (draft) => {
            draft.hotelList = hotelListValue;
          }),
          hotelFilters: rootState.hotelFilters,
        };
      }
      const selectedValue = selectorToTest(rootState);

      expect(selectedValue).toBe(expectedResult);
    }
  );
});
