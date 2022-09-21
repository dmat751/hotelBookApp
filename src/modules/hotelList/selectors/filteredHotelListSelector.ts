import { Hotel } from '../../../app/types/hotel';
import { RootState } from '../../../app/types/rootState';

const amountFilter = (
  hotelList: Hotel[],
  amount: number,
  filterType: 'children' | 'adults'
) => {
  const result = hotelList.map((hotelItem) => {
    let filteredRoom = hotelItem.roomsDetails.rooms.filter((room) => {
      if (filterType === 'children') {
        return room.occupancy.maxChildren >= amount;
      } else if (filterType === 'adults') {
        return room.occupancy.maxAdults >= amount;
      } else {
        return true;
      }
    });

    const filteredHotel = {
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

const starFilter = (hotelList: Hotel[], starAmount: number): Hotel[] =>
  hotelList.filter(({ starRating }) => starRating >= starAmount);

const removeHotelsWithoutRooms = (hotelList: Hotel[]): Hotel[] =>
  hotelList.filter(({ roomsDetails }) => roomsDetails.rooms.length !== 0);

export const selectFilteredHotelList = (state: RootState) => {
  let filteredHotelList = state.hotelList.hotelList;
  const hotelFilters = state.hotelFilters;
  try {
    filteredHotelList = amountFilter(
      filteredHotelList,
      hotelFilters.children,
      'children'
    );

    filteredHotelList = amountFilter(
      filteredHotelList,
      hotelFilters.adults,
      'adults'
    );

    filteredHotelList = starFilter(filteredHotelList, hotelFilters.stars);

    filteredHotelList = removeHotelsWithoutRooms(filteredHotelList);
  } catch (error) {
    console.log('filter Error');
  }
  return filteredHotelList;
};
