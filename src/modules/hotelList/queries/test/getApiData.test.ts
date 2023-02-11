import { Hotel } from '../../types/hotel';
import { getApiData } from '../getApiData';
import validHotelData from '../../../../mocks/hotelsData/validHotelData.json';

describe('test getApiData fn', () => {
  test('get hotel data', async () => {
    //given
    //when
    const hotelData = await getApiData<Hotel[]>(
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
      await getApiData<Hotel[]>(
        `${process.env.REACT_APP_INVALID_HOTEL_LIST_URL}`
      );
    } catch (error) {
      errorMsg = error instanceof Error ? error.message : '';
    }

    //then
    expect(errorMsg).toBe('Could not fetch data!');
  });
});
