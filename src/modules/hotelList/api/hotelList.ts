import { PromisePool } from '@supercharge/promise-pool';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Hotel } from '../../../app/types/hotel';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { RoomsDetails } from '../../../app/types/room';

const getApiData = async <T>(url: string): Promise<T> => {
  const dataResp = await fetch(url);

  if (!dataResp.ok) {
    throw new Error('Could not fetch data!');
  }

  return await dataResp.json();
};

// Define a service using a base URL and expected endpoints
export const hotelApi = createApi({
  reducerPath: 'hotelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_HOTEL_LIST_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    getHotelList: builder.query<Hotel[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const hotelListResult = await fetchWithBQ(
          '/hotels?collection-id=OBMNG'
        );
        if (hotelListResult.error) {
          return { error: hotelListResult.error as FetchBaseQueryError };
        }
        const hotelList = hotelListResult.data as Hotel[];

        const fetchHotelRoomsResult = await PromisePool.withConcurrency(5)
          .for(hotelList)
          .process(
            async (hotelItem) =>
              (hotelItem.roomsDetails = await getApiData<RoomsDetails>(
                `${process.env.REACT_APP_ROOM_LIST_URL + hotelItem.id}`
              ))
          );

        const fetchRoomError: { error: FetchBaseQueryError } = {
          error: { error: '501', status: 'FETCH_ERROR' },
        };

        if (fetchHotelRoomsResult.errors.length > 0) {
          return fetchRoomError;
        }

        return hotelList ? { data: hotelList } : fetchRoomError;
      },
    }),
  }),
});

export const { useGetHotelListQuery } = hotelApi;
