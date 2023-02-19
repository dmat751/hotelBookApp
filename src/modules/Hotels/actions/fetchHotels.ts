import { getApiData } from '../queries/getApiData';
import { Hotel } from '../types/Hotel';
import { RoomsDetails } from '../types/RoomDetails';

export const fetchHotels = async () => {
  const hotels = await getApiData<Hotel[]>(
    `${process.env.REACT_APP_HOTEL_LIST_URL}`
  );

  const hotelPromises = hotels.map(async (hotel) => {
    const rooms = await getApiData<RoomsDetails>(
      `${process.env.REACT_APP_ROOM_LIST_URL + hotel.id}`
    );

    return { ...hotel, roomsDetails: rooms } as Hotel;
  });

  const hotelsWithRooms = await Promise.all(hotelPromises);

  if (!hotelsWithRooms) {
    throw new Error('fetch rooms error');
  }

  return hotelsWithRooms;
};
