import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotel } from '../models/Hotel';

export interface HotelListSliceState {
  hotelList: Hotel[];
  apiQueryStatus: ApiQueryStatus;
}

export interface ApiQueryStatus {
  notification: string;
  isError: boolean;
  isLoading: boolean;
}

const initialState: HotelListSliceState = {
  hotelList: [],
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
    setApiQueryStatus(state, action: PayloadAction<ApiQueryStatus>) {
      state.apiQueryStatus = action.payload;
    },
  },
});

export const { replaceHotelList } = hotelListSlice.actions;

export default hotelListSlice;
