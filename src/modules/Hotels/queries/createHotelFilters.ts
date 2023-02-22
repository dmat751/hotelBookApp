import type { HotelsFiltersState } from '@/modules/HotelFilters/types/HotelFilters';
import { roomOccupancyFilter } from '@/modules/Hotels/queries/hotelFilters/amountFilter';
import { hotelStarFilter } from '@/modules/Hotels/queries/hotelFilters/hotelStarFilter';
import { getHotelsWithAvailableRooms } from '@/modules/Hotels/queries/hotelFilters/removeHotelsWithoutRooms';
import type { Hotel } from '@/modules/Hotels/types/Hotel';

export const createHotelFilters = (hotelFilters: HotelsFiltersState) => [
  (hotels: Hotel[]) =>
    roomOccupancyFilter(hotels, hotelFilters.children, 'children'),
  (hotels: Hotel[]) =>
    roomOccupancyFilter(hotels, hotelFilters.adults, 'adults'),
  (hotels: Hotel[]) => hotelStarFilter(hotels, hotelFilters.stars),
  (hotels: Hotel[]) => getHotelsWithAvailableRooms(hotels),
];
