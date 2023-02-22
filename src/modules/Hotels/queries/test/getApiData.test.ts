import { fetchData } from '@/modules/Hotels/services/fetchData';
import type { Hotel } from '@/modules/Hotels/types/Hotel';
import validHotelData from '../../../../mocks/hotelsData/validHotelData.json';

describe('test getApiData function', () => {
  test('get hotel data', async () => {
    //given
    //when
    const hotelData = await fetchData<Hotel[]>(
      `${process.env.REACT_APP_HOTEL_LIST_URL}`
    );

    //then
    expect(JSON.stringify(hotelData)).toBe(JSON.stringify(validHotelData));
  });

  test('get invalid hotel data', async () => {
    //given
    let errorMsg = '';

    //when
    try {
      await fetchData<Hotel[]>(
        `${process.env.REACT_APP_INVALID_HOTEL_LIST_URL}`
      );
    } catch (error) {
      errorMsg = error instanceof Error ? error.message : '';
    }

    //then
    expect(errorMsg).toBe('Could not fetch data!');
  });
});
