import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HotelsFilters } from '../../app/types/hotelFilters';
import { operationSign } from '../../app/types/operations';

const initialState: HotelsFilters = {
  adults: 2,
  children: 0,
  stars: 1,
  filterLoading: false,
};

const controlPlusMinusFilter = (
  filterValue: number,
  operation: operationSign
) => {
  if (operation === operationSign.plus) {
    return ++filterValue;
  }
  if (operation === operationSign.minus) {
    return --filterValue;
  }
  return filterValue;
};

export const hotelFiltersSlice = createSlice({
  name: 'hotelFilters',
  initialState,
  reducers: {
    setFilterLoading(state, action: PayloadAction<boolean>) {
      state.filterLoading = action.payload;
    },
    setAdultsFilter(state, action: PayloadAction<operationSign>) {
      state.adults = controlPlusMinusFilter(state.adults, action.payload);
    },
    setChildrenFilter(state, action: PayloadAction<operationSign>) {
      state.children = controlPlusMinusFilter(state.children, action.payload);
    },
    setStarsFilter(state, action: PayloadAction<number>) {
      state.stars = action.payload;
    },
  },
});
