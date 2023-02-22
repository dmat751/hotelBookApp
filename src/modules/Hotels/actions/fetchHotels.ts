import { fetchData } from '@/modules/Hotels/services/fetchData';
import type { Hotel } from '@/modules/Hotels/types/Hotel';
import type { RoomsDetails } from '@/modules/Hotels/types/RoomDetails';

export const fetchHotels = async () => {
  const hotels = await fetchData<Hotel[]>(
    `${process.env.REACT_APP_HOTEL_LIST_URL}`
  );

  const hotelPromises = hotels.map(async (hotel) => {
    const rooms = await fetchData<RoomsDetails>(
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
