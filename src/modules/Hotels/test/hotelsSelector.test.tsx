import { renderWithProviders } from '@/app/utils/testUtils';
import { Hotels } from '@/modules/Hotels/components/Hotels/Hotels';
import { screen } from '@testing-library/react';

describe('test allHotelsSelector', () => {
  //given
  type TestCase = {
    adults: number;
    children: number;
    stars: number;
    expectedHotelIds: string[];
    expectedRoomIds: string[];
    expectedHotelsLength: number;
  };

  const cases: TestCase[] = [
    {
      adults: 0,
      children: 0,
      stars: 1,
      expectedHotelIds: [
        'hotel-item-OBMNG1',
        'hotel-item-OBMNG2',
        'hotel-item-OBMNG3',
        'hotel-item-OBMNG4',
      ],
      expectedRoomIds: [
        'room-item-OBMNG1-DTFF',
        'room-item-OBMNG1-STND',
        'room-item-OBMNG1-STTW',
        'room-item-OBMNG1-PSFF',
        'room-item-OBMNG1-STUDIO',
        'room-item-OBMNG1-DSFF',
        'room-item-OBMNG1-DLXDBL',
        'room-item-OBMNG2-SUPE',
        'room-item-OBMNG2-STND',
        'room-item-OBMNG2-JUNIOR',
        'room-item-OBMNG2-LOFT',
        'room-item-OBMNG2-TWIN',
        'room-item-OBMNG2-SEAVU',
        'room-item-OBMNG3-S2B',
        'room-item-OBMNG3-S2C',
        'room-item-OBMNG3-R1S',
        'room-item-OBMNG3-K1BS',
        'room-item-OBMNG3-C1B',
        'room-item-OBMNG3-D1C',
        'room-item-OBMNG3-K1O',
        'room-item-OBMNG3-K1S',
        'room-item-OBMNG3-ESK',
        'room-item-OBMNG4-R1B',
        'room-item-OBMNG4-S2CI',
        'room-item-OBMNG4-R2B',
        'room-item-OBMNG4-S1B',
        'room-item-OBMNG4-R1C',
        'room-item-OBMNG4-C1B',
        'room-item-OBMNG4-R1X',
        'room-item-OBMNG4-S1X',
        'room-item-OBMNG4-D1CI',
        'room-item-OBMNG4-K1B',
        'room-item-OBMNG4-E1X',
      ],
      expectedHotelsLength: 4,
    },
    {
      adults: 2,
      children: 1,
      stars: 4,
      expectedHotelIds: ['hotel-item-OBMNG1', 'hotel-item-OBMNG2'],
      expectedRoomIds: [
        'room-item-OBMNG1-STTW',
        'room-item-OBMNG1-PSFF',
        'room-item-OBMNG1-STUDIO',
        'room-item-OBMNG1-DSFF',
        'room-item-OBMNG1-DLXDBL',
        'room-item-OBMNG2-JUNIOR',
        'room-item-OBMNG2-LOFT',
        'room-item-OBMNG2-TWIN',
        'room-item-OBMNG2-SEAVU',
      ],
      expectedHotelsLength: 2,
    },
    {
      adults: 6,
      children: 4,
      stars: 4,
      expectedHotelIds: ['hotel-item-OBMNG1'],
      expectedRoomIds: ['room-item-OBMNG1-DLXDBL'],
      expectedHotelsLength: 1,
    },
    {
      adults: 6,
      children: 4,
      stars: 5,
      expectedHotelIds: [],
      expectedRoomIds: [],
      expectedHotelsLength: 0,
    },
  ];

  test.each<TestCase>(cases)(
    'test for: %s',
    async ({
      adults,
      children,
      stars,
      expectedHotelIds,
      expectedRoomIds,
      expectedHotelsLength,
    }) => {
      //when
      renderWithProviders(<Hotels />, {
        preloadedState: { hotelFilters: { adults, children, stars } },
      });

      //then
      const checkHotelItemPromises = expectedHotelIds.map(async (id) => {
        const foundItem = screen.findByTestId(id);
        expect(await foundItem).toBeInTheDocument();
      });
      await Promise.all(checkHotelItemPromises);

      const checkRoomItemPromises = expectedRoomIds.map(async (id) => {
        const foundItem = screen.findByTestId(id);
        expect(await foundItem).toBeInTheDocument();
      });
      await Promise.all(checkRoomItemPromises);

      const allHotelItems = screen.queryAllByTestId(/hotel-item*/i);
      expect(await (await allHotelItems).length).toBe(expectedHotelsLength);
    }
  );
});
