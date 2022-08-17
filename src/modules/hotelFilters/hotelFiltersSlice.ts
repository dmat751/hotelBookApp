import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HotelsFilters } from '../../app/types/hotelFilters';
import { operationSign } from '../../app/types/operations';

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
    setAdultsFilter(state, action: PayloadAction<operationSign>) {
      state.adults =
        action.payload === operationSign.plus
          ? state.adults + 1
          : state.adults - 1;
    },
    setChildrenFilter(state, action: PayloadAction<operationSign>) {
      state.children =
        action.payload === operationSign.plus
          ? state.children + 1
          : state.children - 1;
    },
    setStarsFilter(state, action: PayloadAction<number>) {
      state.stars = action.payload;
    },
  },
});
