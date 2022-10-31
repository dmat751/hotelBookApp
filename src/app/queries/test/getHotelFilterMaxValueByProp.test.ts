import { getHotelFilterMaxValueByProp } from '../getHotelFilterMaxValueByProp';
import { fetchHotelList } from '../../../modules/hotelList/fetchHotelList';

describe('test getHotelFilterMaxValueByProp fn', () => {
  test('maxChildren case', async () => {
    //given
    //when
    const hotelList = await fetchHotelList();
    const maxAdults = getHotelFilterMaxValueByProp(hotelList, 'maxChildren');

    //then
    expect(maxAdults).toBe(4);
  });

  test('maxAdults case', async () => {
    //given
    //when
    const hotelList = await fetchHotelList();
    const maxAdults = getHotelFilterMaxValueByProp(hotelList, 'maxAdults');

    //then
    expect(maxAdults).toBe(6);
  });
});
