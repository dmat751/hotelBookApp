import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { Hotel, HotelListSliceState } from '../../app/types/hotel';

export const initialState: HotelListSliceState = {
  hotelList: [],
  isError: false,
  status: 'pending',
  errorMessage: '',
};

export const hotelListSlice = createSlice({
  name: 'hotelList',
  initialState,
  reducers: {
    fetchData: (state) => {
      state.status = 'pending';
    },
    getHotelListSuccess: (state, { payload }: PayloadAction<Hotel[]>) => {
      state.hotelList = payload;
      state.status = 'resolved';
    },
    getHotelListFailure: (state, { payload }: PayloadAction<string>) => {
      state.status = 'resolved';
      state.isError = true;
      state.errorMessage = payload;
      state.hotelList = [];
    },
  },
});

export const hotelListActions = {
  fetchData: createAction('hotelList/fetchData'),
  fetchSuccess: createAction<Hotel[]>('hotelList/getHotelListSuccess'),
  fetchFailure: createAction<String>('hotelList/getHotelListFailure'),
};

export const { fetchData, getHotelListFailure, getHotelListSuccess } =
  hotelListSlice.actions;
