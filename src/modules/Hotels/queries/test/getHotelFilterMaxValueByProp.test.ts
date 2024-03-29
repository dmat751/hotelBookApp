import { getMaxHotelValueByProp } from '@/modules/Hotels/queries/getMaxHotelValueByProp';
import { fetchedHotelsWithRoomsData } from '@/mocks/hotelsWithRoomsData/hotelsWithRoomsData';

describe('test getHotelFilterMaxValueByProp function', () => {
  test('maxChildren case', async () => {
    //given
    //when
    const hotels = fetchedHotelsWithRoomsData;
    const maxAdults = getMaxHotelValueByProp(hotels, 'maxChildren');

    //then
    expect(maxAdults).toBe(4);
  });

  test('maxAdults case', async () => {
    //given
    //when
    const hotels = fetchedHotelsWithRoomsData;
    const maxAdults = getMaxHotelValueByProp(hotels, 'maxAdults');

    //then
    expect(maxAdults).toBe(6);
  });
});
