import { Hotel } from './../types/hotel';
import { getApiData } from './getApiData';
import validHotelData from '../../mocks/hotelsData/validHotelData.json';

describe('test getApiData fn', () => {
  test('get hotel data', async () => {
    const hotelData = await getApiData<Hotel[]>(
      `${process.env.REACT_APP_HOTEL_LIST_URL}`
    );
    expect(JSON.stringify(hotelData)).toBe(JSON.stringify(validHotelData));
  });

  test('get invalid hotel data', async () => {
    let errorMsg = '';
    try {
      const hotelData = await getApiData<Hotel[]>(
        `${process.env.REACT_APP_INVALID_HOTEL_LIST_URL}`
      );
      console.log(hotelData);
    } catch (error) {
      errorMsg = error instanceof Error ? error.message : '';
    }

    expect(errorMsg).toBe('Could not fetch data!');
  });
});
