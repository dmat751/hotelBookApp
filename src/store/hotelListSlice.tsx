import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotel } from '../models/Hotel';

export interface HotelsFilters {
  adults: number;
  children: number;
  stars: number;
}

export interface HotelListSliceState {
  hotelList: Hotel[];
  filters: HotelsFilters;
  apiQueryStatus: ApiQueryStatus;
}

export interface ApiQueryStatus {
  notification: string;
  isError: boolean;
  isLoading: boolean;
}

const initialState: HotelListSliceState = {
  hotelList: [],
  filters: {
    adults: 2,
    children: 0,
    stars: 1,
  },
  apiQueryStatus: {
    isError: false,
    notification: '',
    isLoading: false,
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
    setApiQueryStatus(state, action: PayloadAction<ApiQueryStatus>) {
      state.apiQueryStatus = action.payload;
    },
  },
});

export const { replaceHotelList } = hotelListSlice.actions;

export default hotelListSlice;
