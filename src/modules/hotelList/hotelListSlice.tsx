import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotel } from '../../app/types/hotel';

export type HotelListSliceState = {
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
