import type { Hotel } from '../../types/Hotel';

export const getHotelsWithAvailableRooms = (hotels: Hotel[]): Hotel[] =>
  hotels.filter(({ roomsDetails }) => roomsDetails.rooms.length > 0);
