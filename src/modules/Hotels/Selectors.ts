import { createSelector } from '@reduxjs/toolkit';
import { createHotelImages } from './queries/createHotelImages';
import { RootState } from '../../app/store/store';
import { Photo } from './types/Photo';
import { getRandomNumber } from '../../app/utils/getRandomNumber';
import { getMaxHotelValueByProp } from './queries/getMaxHotelValueByProp';
import { selectHotelFilters } from '../HotelFilters/Selectors';
import { createHotelFilters } from './queries/createHotelFilters';
import { Hotel } from './types/Hotel';

const DEFAULT_MAX_STAR_VALUE = 5;

export const selectHotels = (state: RootState): Hotel[] => state.hotels.hotels;

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

export const selectIsDataStatus = (state: RootState) => state.hotels.status;
export const selectErrorType = (state: RootState) => state.hotels.errorMessage;
export const selectIsDataError = (state: RootState) => state.hotels.isError;
