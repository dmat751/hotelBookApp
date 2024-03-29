import { getRandomNumber } from '@/app/utils/getRandomNumber';
import { selectHotelFilters } from '@/modules/HotelFilters/selectors';
import { api } from '@/modules/Hotels/api';
import { createHotelFilters } from '@/modules/Hotels/queries/createHotelFilters';
import { createHotelImages } from '@/modules/Hotels/queries/createHotelImages';
import { getMaxHotelValueByProp } from '@/modules/Hotels/queries/getMaxHotelValueByProp';
import type { Photo } from '@/modules/Hotels/types/Photo';
import { createSelector } from '@reduxjs/toolkit';

const DEFAULT_MAX_STAR_VALUE = 5;

export const selectHotels = createSelector(
  [api.endpoints.getHotels.select()],
  (hotels) => hotels.data ?? []
);

export const selectRandomHotelPhoto = createSelector(
  [selectHotels],
  (hotels): Photo => {
    const hotelImages = createHotelImages(hotels);

    if (hotelImages.length === 0) {
      return { alt: '', url: '' };
    }

    const randomImgArrayIndex = getRandomNumber(0, hotelImages.length - 1);

    return hotelImages[randomImgArrayIndex];
  }
);

export const selectFilteredHotels = createSelector(
  [selectHotels, selectHotelFilters],
  (hotels, hotelFilters) =>
    createHotelFilters(hotelFilters).reduce(
      (filteredHotels, currentFilter) => currentFilter(filteredHotels),
      hotels
    )
);

export const selectNumberOfFilteredHotels = createSelector(
  [selectFilteredHotels],
  (hotels) => hotels.length
);

export const selectMaxHotelStars = createSelector([selectHotels], (hotels) => {
  const starsRating = hotels.map(({ starRating }) => starRating);

  return starsRating.length > 0
    ? Math.max(...starsRating)
    : DEFAULT_MAX_STAR_VALUE;
});

export const selectMaxChildrenInHotels = createSelector(
  [selectHotels],
  (hotels) => getMaxHotelValueByProp(hotels, 'maxChildren')
);

export const selectMaxAdultsInHotels = createSelector(
  [selectHotels],
  (hotels) => getMaxHotelValueByProp(hotels, 'maxAdults')
);
