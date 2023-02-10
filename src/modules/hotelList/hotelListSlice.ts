import { createSlice } from '@reduxjs/toolkit';
import { HotelListSliceState } from '../../app/types/hotel';
import { fetchHotelListData } from './hotelListAction';

const initialState: HotelListSliceState = {
  hotelList: [],
  dataStatus: 'idle',
  error: null,
};

export const hotelListSlice = createSlice({
  name: 'hotelList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHotelListData.pending, (state, action) => {
        state.dataStatus = 'loading';
      })
      .addCase(fetchHotelListData.fulfilled, (state, action) => {
        state.hotelList = action.payload;
        state.dataStatus = 'succeeded';
      })
      .addCase(fetchHotelListData.rejected, (state, action) => {
        state.hotelList = [];
        state.error = action.payload + '';
        state.dataStatus = 'failed';
      });
  },
});
