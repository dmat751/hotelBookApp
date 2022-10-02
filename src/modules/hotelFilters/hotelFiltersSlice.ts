import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HotelsFilters } from '../../app/types/hotelFilters';

const initialState: HotelsFilters = {
  adults: 2,
  children: 0,
  stars: 1,
};

export const hotelFiltersSlice = createSlice({
  name: 'hotelFilters',
  initialState,
  reducers: {
    setAdultsFilter(state, { payload }: PayloadAction<'ADD' | 'SUB'>) {
      state.adults = payload === 'ADD' ? state.adults + 1 : state.adults - 1;
    },
    setChildrenFilter(state, { payload }: PayloadAction<'ADD' | 'SUB'>) {
      state.children =
        payload === 'ADD' ? state.children + 1 : state.children - 1;
    },
    setStarsFilter(state, { payload }: PayloadAction<number>) {
      state.stars = payload;
    },
  },
});
