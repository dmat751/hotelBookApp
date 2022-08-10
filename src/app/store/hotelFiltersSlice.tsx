import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type HotelsFilters = {
  adults: number;
  children: number;
  stars: number;
  filterLoading: boolean;
}

const initialState: HotelsFilters = {
  adults: 2,
  children: 0,
  stars: 1,
  filterLoading: false,
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
  },
});

export const { setHotelFilters, setFilterLoading } = hotelFiltersSlice.actions;

export default hotelFiltersSlice;
