import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HotelsFilters } from '../../app/types/hotelFilters';

const initialState: HotelsFilters = {
  adults: 2,
  children: 0,
  stars: 1,
  filterLoading: false,
};

export const hotelFiltersSlice = createSlice({
  name: 'hotelFilters',
  initialState,
  reducers: {
    setFilterLoading(state, action: PayloadAction<boolean>) {
      state.filterLoading = action.payload;
    },
    setAdultsFilter(state, action: PayloadAction<'ADD' | 'SUB'>) {
      state.adults =
        action.payload === 'ADD' ? state.adults + 1 : state.adults - 1;
    },
    setChildrenFilter(state, action: PayloadAction<'ADD' | 'SUB'>) {
      state.children =
        action.payload === 'ADD' ? state.children + 1 : state.children - 1;
    },
    setStarsFilter(state, action: PayloadAction<number>) {
      state.stars = action.payload;
    },
  },
});
