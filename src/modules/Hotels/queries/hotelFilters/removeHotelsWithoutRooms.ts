import type { Hotel } from '@/modules/Hotels/types/Hotel';

export const getHotelsWithAvailableRooms = (hotels: Hotel[]): Hotel[] =>
  hotels.filter(({ roomsDetails }) => roomsDetails.rooms.length > 0);
