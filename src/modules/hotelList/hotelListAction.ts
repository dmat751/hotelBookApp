import { Hotel } from './../../app/types/hotel';
import { RoomsDetails } from '../../app/types/room';
import PromisePool from '@supercharge/promise-pool';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getApiData = async <T>(url: string): Promise<T> => {
  const dataResp = await fetch(url);

  if (!dataResp.ok) {
    throw new Error('Could not fetch data!');
  }

  return await dataResp.json();
};

export const fetchHotelListData = createAsyncThunk(
  'hotel/fetchHotels',
  async (data, thunkAPI) => {
    try {
      const hotelList = await getApiData<Hotel[]>(
        `${process.env.REACT_APP_HOTEL_LIST_URL}`
      );

      const fetchHotelRoomsResult = await PromisePool.withConcurrency(5)
        .for(hotelList)
        .process(
          async (hotelItem) =>
            (hotelItem.roomsDetails = await getApiData<RoomsDetails>(
              `${process.env.REACT_APP_ROOM_LIST_URL + hotelItem.id}`
            ))
        );

      if (fetchHotelRoomsResult.errors.length > 0) {
        throw new Error('room fetch error');
      }

      return hotelList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
