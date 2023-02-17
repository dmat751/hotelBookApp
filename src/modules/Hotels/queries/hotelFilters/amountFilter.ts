import { Room } from './../../types/Room';
import type { Hotel } from '../../types/Hotel';

export const roomOccupancyFilter = (
  hotels: Hotel[],
  amount: number,
  filterType: 'children' | 'adults'
): Hotel[] => hotels.map((hotel) => filterRooms(filterType, amount, hotel));

const filterRooms = (filterType: string, amount: number, hotel: Hotel) => {
  const { roomsDetails } = hotel;
  const filteredRooms = roomsDetails.rooms.filter(
    filterRoomsByOccupancy(filterType, amount)
  );

  return {
    ...hotel,
    roomsDetails: {
      ratePlans: roomsDetails.ratePlans,
      rooms: filteredRooms,
    },
  };
};

const filterRoomsByOccupancy =
  (filterType: string, amount: number) => (room: Room) => {
    if (filterType === 'children') {
      return room.occupancy.maxChildren >= amount;
    } else if (filterType === 'adults') {
      return room.occupancy.maxAdults >= amount;
    } else {
      return true;
    }
  };
