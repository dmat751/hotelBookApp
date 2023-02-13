import type { Hotel } from '../../types/Hotel';

export const roomOccupancyFilter = (
  hotelList: Hotel[],
  amount: number,
  filterType: 'children' | 'adults'
): Hotel[] => {
  const result: Hotel[] = hotelList.map((hotelItem) => {
    let filteredRoom = hotelItem.roomsDetails.rooms.filter((room) => {
      if (filterType === 'children') {
        return room.occupancy.maxChildren >= amount;
      } else if (filterType === 'adults') {
        return room.occupancy.maxAdults >= amount;
      } else {
        return true;
      }
    });

    const filteredHotel: Hotel = {
      ...hotelItem,
      roomsDetails: {
        ratePlans: hotelItem.roomsDetails.ratePlans,
        rooms: filteredRoom,
      },
    };

    return filteredHotel;
  });
  return result;
};
