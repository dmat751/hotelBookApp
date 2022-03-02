import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface HotelsFilters {
  adults: number;
  children: number;
  stars: number;
}

const initialState: HotelsFilters = {
  adults: 2,
  children: 0,
  stars: 1,
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
  },
});

export const { setHotelFilters } = hotelFiltersSlice.actions;

export default hotelFiltersSlice;
