import { HotelsFiltersState } from './../../HotelFilters/types/hotelFilters';
import { Hotel } from './../types/Hotel';
import { getHotelsWithAvailableRooms } from './hotelFilters/removeHotelsWithoutRooms';
import { hotelStarFilter } from './hotelFilters/hotelStarFilter';
import { roomOccupancyFilter } from './hotelFilters/amountFilter';

export const createHotelFilters = (hotelFilters: HotelsFiltersState) => [
  (hotels: Hotel[]) =>
    roomOccupancyFilter(hotels, hotelFilters.children, 'children'),
  (hotels: Hotel[]) =>
    roomOccupancyFilter(hotels, hotelFilters.adults, 'adults'),
  (hotels: Hotel[]) => hotelStarFilter(hotels, hotelFilters.stars),
  (hotels: Hotel[]) => getHotelsWithAvailableRooms(hotels),
];
