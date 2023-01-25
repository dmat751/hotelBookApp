import { RoomsDetails } from './../../app/types/room';
import { PromisePool } from '@supercharge/promise-pool/dist';
import { Hotel } from './../../app/types/hotel';
import { getApiData } from './../../app/queries/getApiData';

export const fetchHotelList = async () => {
  const hotelList = await getApiData<Hotel[]>(
    `${process.env.REACT_APP_HOTEL_LIST_URL}`
  );

  const fetchRoomListResults = await PromisePool.withConcurrency(5)
    .for(hotelList)
    .process(
      async (hotelItem) =>
        (hotelItem.roomsDetails = await getApiData<RoomsDetails>(
          `${process.env.REACT_APP_ROOM_LIST_URL + hotelItem.id}`
        ))
    );

  if (fetchRoomListResults.errors.length > 0) {
    throw new Error('fetch rooms error');
  }

  return hotelList;
};
