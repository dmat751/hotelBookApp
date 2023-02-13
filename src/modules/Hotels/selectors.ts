import { createSelector } from '@reduxjs/toolkit';
import { hotelsApiSlice } from './api/hotelsApiSlice';
import { Photo } from './types/room';
import { createHotelImages } from './queries/createHotelImages';
import { getRandomNumber } from '../../app/utils/getRandomNumber';
import { getMaxHotelValueByProp } from './queries/getMaxHotelValueByProp';
import { selectHotelFilters } from '../HotelFilters/hotelFiltersSelectors';
import { roomOccupancyFilter } from './queries/hotelFilters/amountFilter';
import { hotelStarFilter } from './queries/hotelFilters/hotelStarFilter';
import { removeHotelsWithoutRooms } from './queries/hotelFilters/removeHotelsWithoutRooms';
import type { Hotel } from './types/hotel';

const DEFAULT_MAX_STAR_VALUE = 5;

export const selectHotels = createSelector(
  [hotelsApiSlice.endpoints.getHotels.select()],
  (hotelList) => hotelList.data ?? []
);

export const selectRandomHotelPhoto = createSelector(
  [selectHotels],
  (hotelList) => {
    const hotelImages: Photo[] = createHotelImages(hotelList);

    if (hotelImages.length === 0) {
      return { alt: '', url: '' } as Photo;
    }

    const randomImgArrayIndex = getRandomNumber(0, hotelImages.length - 1);

    return hotelImages[randomImgArrayIndex];
  }
);

export const selectFilteredHotels = createSelector(
  [selectHotels, selectHotelFilters],
  (unfilteredHotels, hotelFilters) =>
    [
      (hotels: Hotel[]) =>
        roomOccupancyFilter(hotels, hotelFilters.children, 'children'),
      (hotels: Hotel[]) =>
        roomOccupancyFilter(hotels, hotelFilters.adults, 'adults'),
      (hotels: Hotel[]) => hotelStarFilter(hotels, hotelFilters.stars),
      (hotels: Hotel[]) => removeHotelsWithoutRooms(hotels),
    ].reduce(
      (filteredHotels, currentFilter) => currentFilter(filteredHotels),
      unfilteredHotels
    )
);

export const selectHotelsLength = createSelector(
  [selectFilteredHotels],
  (hotelList) => hotelList.length
);

export const selectMaxHotelStars = createSelector(
  [selectHotels],
  (hotelList) => {
    const starsRating = hotelList.map(({ starRating }) => starRating);

    return starsRating.length > 0
      ? Math.max(...starsRating)
      : DEFAULT_MAX_STAR_VALUE;
  }
);

export const selectMaxChildrenInHotels = createSelector(
  [selectHotels],
  (hotelList) => getMaxHotelValueByProp(hotelList, 'maxChildren')
);

export const selectMaxAdultsInHotels = createSelector(
  [selectHotels],
  (hotelList) => getMaxHotelValueByProp(hotelList, 'maxAdults')
);
