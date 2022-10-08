import { getHotelFilterMaxValueByProp } from './getHotelFilterMaxValueByProp';
import { fetchHotelList } from './../../modules/hotelList/fetchHotelList';

describe('test getHotelFilterMaxValueByProp fn', () => {
  test('maxChildren case', async () => {
    const hotelList = await fetchHotelList();
    const maxAdults = getHotelFilterMaxValueByProp(hotelList, 'maxChildren');
    expect(maxAdults).toBe(4);
  });

  test('maxAdults case', async () => {
    const hotelList = await fetchHotelList();
    const maxAdults = getHotelFilterMaxValueByProp(hotelList, 'maxAdults');
    expect(maxAdults).toBe(6);
  });
});
