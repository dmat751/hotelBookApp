import { removeHotelsWithoutRooms } from './../queries/hotelFilters/removeHotelsWithoutRooms';
import { starFilter } from './../queries/hotelFilters/starFilter';
import { amountFilter } from './../queries/hotelFilters/amountFilter';
import { selectHotelFilters } from './../../hotelFilters/hotelFiltersSelectors';
import { selectAllHotelList } from './selectAllHotelList';
import { createSelector } from '@reduxjs/toolkit';

export const selectFilteredHotelList = createSelector(
  [selectAllHotelList, selectHotelFilters],
  (unfilteredHotelList, hotelFilters) => {
    let filteredHotelList = unfilteredHotelList;
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

    return filteredHotelList;
  }
);
