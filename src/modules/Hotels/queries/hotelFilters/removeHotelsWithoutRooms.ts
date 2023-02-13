import type { Hotel } from '../../types/Hotel';

export const removeHotelsWithoutRooms = (hotelList: Hotel[]): Hotel[] =>
  hotelList.filter(({ roomsDetails }) => roomsDetails.rooms.length !== 0);
