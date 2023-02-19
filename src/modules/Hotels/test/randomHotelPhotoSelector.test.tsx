import { resetRootState } from '@/app/store/resetRootState';
import { RootState } from '@/app/store/store';
import { fetchedHotelsWithRoomsData } from '@/mocks/hotelsWithRoomsData/hotelsWithRoomsData';
import { selectRandomHotelPhoto } from '@/modules/Hotels/selectors';
import type { Hotel } from '@/modules/Hotels/types/Hotel';
import type { Photo } from '@/modules/Hotels/types/Photo';
import produce from 'immer';

let rootState: RootState;

beforeEach(() => {
  rootState = resetRootState(rootState);
});

describe('test randomHotelPhotoSelector', () => {
  //given
  type TestCase = {
    hotelsValue: Hotel[] | 'default';
    expectedResult: Photo;
    getRandomNumberMockedValue: number;
  };

  const cases: TestCase[] = [
    {
      expectedResult: {
        alt: '',
        url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/hotel4.jpg',
      },
      getRandomNumberMockedValue: 1,
      hotelsValue: 'default',
    },
    {
      expectedResult: {
        alt: '',
        url: '',
      },
      getRandomNumberMockedValue: -1,
      hotelsValue: [],
    },
    {
      expectedResult: {
        alt: '',
        url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/Hotel1.JPG',
      },
      getRandomNumberMockedValue: 0,
      hotelsValue: fetchedHotelsWithRoomsData.slice(0, 1),
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
        getRandomNumberMockedValue: ${caseItem.getRandomNumberMockedValue}
        expected result: {url: ${caseItem.expectedResult.url}, alt: ${caseItem.expectedResult.alt}}`;
        },
      } as TestCase)
  );

  test.each<TestCase>(cases)(
    'test for %s',
    ({ hotelsValue, getRandomNumberMockedValue, expectedResult }) => {
      //when
      const getRandomNumber = require('../../../app/utils/getRandomNumber');
      const mock = jest
        .spyOn(getRandomNumber, 'getRandomNumber')
        .mockReturnValue(getRandomNumberMockedValue);

      if (hotelsValue !== 'default') {
        rootState = {
          hotels: produce(rootState.hotels, (draft) => {
            draft.hotels = hotelsValue;
          }),
          hotelFilters: rootState.hotelFilters,
        };
      }
      const selectedValue = selectRandomHotelPhoto(rootState);

      //then
      expect(selectedValue).toEqual(expectedResult);
      mock.mockRestore();
    }
  );
});
