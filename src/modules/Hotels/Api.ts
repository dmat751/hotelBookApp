import { getApiData } from './queries/getApiData';
import { PromisePool } from '@supercharge/promise-pool';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Hotel } from './types/Hotel';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { RoomsDetails } from './types/RoomDetails';
import { CLIENT_RENEG_LIMIT } from 'tls';

export const api = createApi({
  reducerPath: 'hotelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_HOTEL_LIST_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    getHotels: builder.query<Hotel[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const hotelsResult = await fetchWithBQ('/hotels?collection-id=OBMNG');
        if (hotelsResult.error) {
          return { error: hotelsResult.error as FetchBaseQueryError };
        }
        const hotels = hotelsResult.data as Hotel[];

        const hotelPromises = hotels.map(async (hotel) => {
          const rooms = await getApiData<RoomsDetails>(
            `${process.env.REACT_APP_ROOM_LIST_URL + hotel.id}`
          );
          const result = { ...hotel, roomsDetails: rooms } as Hotel;
          return result;
        });

        const hotelsWithRooms = await Promise.all(hotelPromises);

        const fetchRoomError: { error: FetchBaseQueryError } = {
          error: { error: '501', status: 'FETCH_ERROR' },
        };

        return hotelsWithRooms ? { data: hotelsWithRooms } : fetchRoomError;
      },
    }),
  }),
});

export const { useGetHotelsQuery } = api;
