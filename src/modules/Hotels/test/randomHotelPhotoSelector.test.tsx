import produce from 'immer';
import { resetRootState } from '../../../app/store/resetRootState';
import { RootState } from '../../../app/store/store';
import { fetchedHotelsWithRoomsData } from '../../../mocks/hotelsWithRoomsData/hotelsWithRoomsData';
import { selectRandomHotelPhoto } from '../Selectors';
import { Hotel } from '../types/Hotel';
import { Photo } from '../types/Photo';

let rootState: RootState;

beforeEach(() => {
  rootState = resetRootState(rootState);
});

describe('test randomHotelPhotoSelector', () => {
  //given
  type TestCase = {
    hotelListValue: Hotel[] | 'default';
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
      hotelListValue: 'default',
    },
    {
      expectedResult: {
        alt: '',
        url: '',
      },
      getRandomNumberMockedValue: -1,
      hotelListValue: [],
    },
    {
      expectedResult: {
        alt: '',
        url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/Hotel1.JPG',
      },
      getRandomNumberMockedValue: 0,
      hotelListValue: fetchedHotelsWithRoomsData.slice(0, 1),
    },
  ].map((caseItem) =>
    Object.assign(caseItem, {
      toString: () => {
        const hotelListValueToPrint =
          caseItem.hotelListValue !== 'default' ? 'custom' : 'default';

        return `
        hotelListValue: ${hotelListValueToPrint}
        getRandomNumberMockedValue: ${caseItem.getRandomNumberMockedValue}
        expected result: {url: ${caseItem.expectedResult.url}, alt: ${caseItem.expectedResult.alt}}`;
      },
    } as TestCase)
  );

  test.each<TestCase>(cases)(
    'test for %s',
    ({ hotelListValue, getRandomNumberMockedValue, expectedResult }) => {
      //when
      const getRandomNumber = require('../../../../app/queries/getRandomNumber');
      const mock = jest
        .spyOn(getRandomNumber, 'getRandomNumber')
        .mockReturnValue(getRandomNumberMockedValue);

      if (hotelListValue !== 'default') {
        rootState = {
          hotelList: produce(rootState.hotelList, (draft) => {
            draft.hotelList = hotelListValue;
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
