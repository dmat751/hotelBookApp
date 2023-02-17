import { RootState } from '../../app/store/store';

export const selectHotelFilters = (state: RootState) => state.hotelFilters;

export const selectChildrenFilter = (state: RootState) =>
  state.hotelFilters.children;

export const selectAdultsFilter = (state: RootState) =>
  state.hotelFilters.adults;

export const selectStarsFilter = (state: RootState) => state.hotelFilters.stars;
