import { HotelsFilters } from './types/HotelFilters';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { FilterAction } from './types/FilterAction';

export const initialState: HotelsFilters = {
  adults: 2,
  children: 0,
  stars: 1,
};

export const hotelFiltersSlice = createSlice({
  name: 'HotelFilters',
  initialState,
  reducers: {
    setAdultsFilter(state, { payload }: PayloadAction<FilterAction>) {
      state.adults = payload === 'ADD' ? state.adults + 1 : state.adults - 1;
    },
    setChildrenFilter(state, { payload }: PayloadAction<FilterAction>) {
      state.children =
        payload === 'ADD' ? state.children + 1 : state.children - 1;
    },
    setStarsFilter(state, { payload }: PayloadAction<number>) {
      state.stars = payload;
    },
  },
});

export const { setAdultsFilter, setChildrenFilter, setStarsFilter } =
  hotelFiltersSlice.actions;
