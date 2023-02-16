import { RoomsDetails } from './../../app/types/room';
import { Hotel } from './../../app/types/hotel';
import { getApiData } from './../../app/queries/getApiData';

export const fetchHotelList = async () => {
  const hotels = await getApiData<Hotel[]>(
    `${process.env.REACT_APP_HOTEL_LIST_URL}`
  );

  const hotelPromises = hotels.map(async (hotel) => {
    const rooms = await getApiData<RoomsDetails>(
      `${process.env.REACT_APP_ROOM_LIST_URL + hotel.id}`
    );
    const result = { ...hotel, roomsDetails: rooms } as Hotel;
    return result;
  });

  const hotelsWithRooms = await Promise.all(hotelPromises);

  if (!hotelsWithRooms) {
    throw new Error('fetch rooms error');
  }

  return hotelsWithRooms;
};
