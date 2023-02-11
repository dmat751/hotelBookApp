import { fetchedHotelsWithRoomsData } from './../../../../mocks/hotelsWithRoomsData/hotelsWithRoomsData';
import { getMaxHotelValueByProp } from './../getMaxHotelValueByProp';
describe('test getHotelFilterMaxValueByProp fn', () => {
  test('maxChildren case', async () => {
    //given
    //when
    const hotelList = fetchedHotelsWithRoomsData;
    const maxAdults = getMaxHotelValueByProp(hotelList, 'maxChildren');

    //then
    expect(maxAdults).toBe(4);
  });

  test('maxAdults case', async () => {
    //given
    //when
    const hotelList = fetchedHotelsWithRoomsData;
    const maxAdults = getMaxHotelValueByProp(hotelList, 'maxAdults');

    //then
    expect(maxAdults).toBe(6);
  });
});
