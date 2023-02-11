import { Hotel } from './../../types/hotel';

export const removeHotelsWithoutRooms = (hotelList: Hotel[]): Hotel[] =>
  hotelList.filter(({ roomsDetails }) => roomsDetails.rooms.length !== 0);
