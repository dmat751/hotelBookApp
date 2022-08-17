import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotel, HotelListSliceState } from '../../app/types/hotel';

const initialState: HotelListSliceState = {
  hotelList: [],
};

export const hotelListSlice = createSlice({
  name: 'hotelList',
  initialState,
  reducers: {
    replaceHotelList(state, action: PayloadAction<Hotel[]>) {
      state.hotelList = action.payload;
    },
  },
});

export const { replaceHotelList } = hotelListSlice.actions;
