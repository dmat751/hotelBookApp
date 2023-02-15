import type { Hotel } from '../../types/Hotel';

export const getHotelsWithAvailableRooms = (hotelList: Hotel[]): Hotel[] =>
  hotelList.filter(({ roomsDetails }) => roomsDetails.rooms.length > 0);
