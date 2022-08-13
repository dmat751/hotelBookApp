import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { operationSign } from '../../app/types/operations';

export type HotelsFilters = {
  adults: number;
  children: number;
  stars: number;
  filterLoading: boolean;
};

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

const hotelFiltersSlice = createSlice({
  name: 'hotelFilters',
  initialState,
  reducers: {
    setHotelFilters(state, action: PayloadAction<HotelsFilters>) {
      state.adults = action.payload.adults;
      state.children = action.payload.children;
      state.stars = action.payload.stars;
    },
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

export const { setHotelFilters, setFilterLoading } = hotelFiltersSlice.actions;

export default hotelFiltersSlice;
