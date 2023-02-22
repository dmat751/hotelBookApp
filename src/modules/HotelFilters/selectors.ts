import { RootState } from '@store/store';

export const selectHotelFilters = (state: RootState) => state.hotelFilters;

export const selectChildrenFilter = (state: RootState) =>
  selectHotelFilters(state).children;

export const selectAdultsFilter = (state: RootState) =>
  selectHotelFilters(state).adults;

export const selectStarsFilter = (state: RootState) =>
  selectHotelFilters(state).stars;
