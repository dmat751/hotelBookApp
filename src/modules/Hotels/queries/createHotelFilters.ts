import { Hotel } from './../types/Hotel';
import { HotelsFilters } from './../../HotelFilters/types/HotelFilters';
import { getHotelsWithAvailableRooms } from './hotelFilters/removeHotelsWithoutRooms';
import { hotelStarFilter } from './hotelFilters/hotelStarFilter';
import { roomOccupancyFilter } from './hotelFilters/amountFilter';
export const createHotelFilters = (hotelFilters: HotelsFilters) => [
  (hotels: Hotel[]) =>
    roomOccupancyFilter(hotels, hotelFilters.children, 'children'),
  (hotels: Hotel[]) =>
    roomOccupancyFilter(hotels, hotelFilters.adults, 'adults'),
  (hotels: Hotel[]) => hotelStarFilter(hotels, hotelFilters.stars),
  (hotels: Hotel[]) => getHotelsWithAvailableRooms(hotels),
];
