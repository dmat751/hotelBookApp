import produce from 'immer';
import { resetRootState } from '../../../app/store/resetRootState';
import { RootState } from '../../../app/store/store';
import {
  selectMaxAdultsInHotels,
  selectMaxChildrenInHotels,
  selectMaxHotelStars,
} from '../selectors';
import { Hotel } from '../types/Hotel';

let rootState: RootState;

beforeEach(() => {
  rootState = resetRootState(rootState);
});

describe('test max filter values selectors', () => {
  //given
  type TestCase = {
    hotelsValue: Hotel[] | 'default';
    selectorToTest: Function;
    expectedResult: number;
    selectorNameForPrint: string;
    toString: () => string;
  };
  const cases: TestCase[] = [
    {
      hotelsValue: 'default',
      selectorToTest: selectMaxAdultsInHotels,
      expectedResult: 6,
      selectorNameForPrint: 'selectMaxAdultsInHotels',
    },
    {
      hotelsValue: [],
      selectorToTest: selectMaxAdultsInHotels,
      expectedResult: 0,
      selectorNameForPrint: 'selectMaxAdultsInHotels',
    },
    {
      hotelsValue: 'default',
      selectorToTest: selectMaxChildrenInHotels,
      expectedResult: 4,
      selectorNameForPrint: 'selectMaxChildrenInHotels',
    },
    {
      hotelsValue: [],
      selectorToTest: selectMaxChildrenInHotels,
      expectedResult: 0,
      selectorNameForPrint: 'selectMaxChildrenInHotels',
    },
    {
      hotelsValue: 'default',
      selectorToTest: selectMaxHotelStars,
      expectedResult: 5,
      selectorNameForPrint: 'selectMaxHotelStars',
    },
    {
      hotelsValue: [],
      selectorToTest: selectMaxHotelStars,
      expectedResult: 5,
      selectorNameForPrint: 'selectMaxHotelStars',
    },
  ].map(
    (caseItem) =>
      ({
        ...caseItem,
        toString: () => {
          const hotelsValueToPrint =
            caseItem.hotelsValue !== 'default' ? 'custom' : 'default';

          return `
        hotelsValue: ${hotelsValueToPrint}
        selector to test: ${caseItem.selectorNameForPrint}
        expected result: ${caseItem.expectedResult}`;
        },
      } as TestCase)
  );

  test.each<TestCase>(cases)(
    'test for: %s',
    ({ hotelsValue, selectorToTest, expectedResult }) => {
      //when
      if (hotelsValue !== 'default') {
        rootState = {
          hotels: produce(rootState.hotels, (draft) => {
            draft.hotels = hotelsValue;
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
