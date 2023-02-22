import { renderWithProviders } from '@/app/utils/testUtils';
import type { Photo } from '@/modules/Hotels/types/Photo';
import { screen } from '@testing-library/react';
import { App } from '@/app/App';

describe('test randomHotelPhotoSelector', () => {
  //given
  type TestCase = {
    expectedResult: Photo;
    getRandomNumberMockedValue: number;
  };

  const cases: TestCase[] = [
    {
      expectedResult: {
        alt: '',
        url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/Hotel1.JPG',
      },
      getRandomNumberMockedValue: 0,
    },
    {
      expectedResult: {
        alt: '',
        url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/hotel4.jpg',
      },
      getRandomNumberMockedValue: 1,
    },
  ].map(
    (caseItem) =>
      ({
        ...caseItem,
        toString: () =>
          `getRandomNumberMockedValue: ${caseItem.getRandomNumberMockedValue}
        expected result: {url: ${caseItem.expectedResult.url}, alt: ${caseItem.expectedResult.alt}}`,
      } as TestCase)
  );

  test.each<TestCase>(cases)(
    'test for %s',
    async ({ getRandomNumberMockedValue, expectedResult }) => {
      //when
      const getRandomNumber = require('../../../app/utils/getRandomNumber');
      const mock = jest
        .spyOn(getRandomNumber, 'getRandomNumber')
        .mockReturnValue(getRandomNumberMockedValue);

      await renderWithProviders(<App />, {
        preloadedState: {
          hotelFilters: { adults: 0, children: 0, stars: 1 },
        },
      });

      //then
      const foundItem = screen.findByTestId(expectedResult.url);
      expect(await foundItem).toBeInTheDocument();

      mock.mockRestore();
    }
  );
});
