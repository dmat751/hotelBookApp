import produce from 'immer';
import { resetRootState } from '../../../app/store/resetRootState';
import { RootState } from '../../../app/store/store';
import {
  selectMaxAdultsInHotels,
  selectMaxChildrenInHotels,
  selectMaxHotelStars,
} from '../Selectors';
import { Hotel } from '../types/Hotel';

let rootState: RootState;

beforeEach(() => {
  rootState = resetRootState(rootState);
});

describe('test max filter values selectors', () => {
  //given
  type TestCase = {
    hotelListValue: Hotel[] | 'default';
    selectorToTest: Function;
    expectedResult: number;
    selectorNameForPrint: string;
    toString: () => string;
  };
  const cases: TestCase[] = [
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
  ].map(
    (caseItem) =>
      ({
        ...caseItem,
        toString: () => {
          const hotelListValueToPrint =
            caseItem.hotelListValue !== 'default' ? 'custom' : 'default';

          return `
        hotelListValue: ${hotelListValueToPrint}
        selector to test: ${caseItem.selectorNameForPrint}
        expected result: ${caseItem.expectedResult}`;
        },
      } as TestCase)
  );

  test.each<TestCase>(cases)(
    'test for: %s',
    ({ hotelListValue, selectorToTest, expectedResult }) => {
      //when
      if (hotelListValue !== 'default') {
        rootState = {
          hotelList: produce(rootState.hotelList, (draft) => {
            draft.hotelList = hotelListValue;
          }),
          hotelFilters: rootState.hotelFilters,
        };
      }
      const selectedValue = selectorToTest(rootState);

      //then
      expect(selectedValue).toBe(expectedResult);
    }
  );
});
