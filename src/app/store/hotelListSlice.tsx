import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotel } from '../../models/hotel';

export interface HotelListSliceState {
  hotelList: Hotel[];
}

const initialState: HotelListSliceState = {
  hotelList: [],
};

const hotelListSlice = createSlice({
  name: 'hotelList',
  initialState,
  reducers: {
    replaceHotelList(state, action: PayloadAction<Hotel[]>) {
      state.hotelList = action.payload;
    },
  },
});

export const { replaceHotelList } = hotelListSlice.actions;

export default hotelListSlice;
