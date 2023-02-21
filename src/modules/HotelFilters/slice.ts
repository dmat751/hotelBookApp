import type { FilterAction } from '@/modules/HotelFilters/types/FilterAction';
import type { HotelsFiltersState } from '@/modules/HotelFilters/types/hotelFilters';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export const initialState: HotelsFiltersState = {
  adults: 2,
  children: 0,
  stars: 1,
};

export const hotelFiltersSlice = createSlice({
  name: 'hotelFilters',
  initialState: initialState,
  reducers: {
    setAdultsFilter(state, { payload }: PayloadAction<FilterAction>) {
      state.adults = payload === 'ADD' ? ++state.adults : --state.adults;
    },
    setChildrenFilter(state, { payload }: PayloadAction<FilterAction>) {
      state.children = payload === 'ADD' ? ++state.children : --state.children;
    },
    setStarsFilter(state, { payload }: PayloadAction<number>) {
      state.stars = payload;
    },
  },
});

export const { setAdultsFilter, setChildrenFilter, setStarsFilter } =
  hotelFiltersSlice.actions;
