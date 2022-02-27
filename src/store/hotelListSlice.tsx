import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotel } from '../models/Hotel';

export interface HotelListSliceState {
  hotelList: Hotel[];
  filters: HotelsFilters;
}

export interface HotelsFilters {
  adults: number;
  children: number;
  stars: number;
}

const initialState: HotelListSliceState = {
  hotelList: [],
  filters: {
    adults: 2,
    children: 0,
    stars: 3,
  },
};

const hotelListSlice = createSlice({
  name: 'hotelList',
  initialState,
  reducers: {
    replaceHotelList(state, action: PayloadAction<Hotel[]>) {
      state.hotelList = action.payload;
    },
    setHotelFilters(state, action: PayloadAction<HotelsFilters>) {
      state.filters = action.payload;
    },
  },
});

export const { replaceHotelList } = hotelListSlice.actions;

export default hotelListSlice;
