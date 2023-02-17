import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { Hotel } from './types/Hotel';
import { HotelListSliceState } from './types/HotelListSliceState';

export const initialState: HotelListSliceState = {
  hotelList: [],
  isError: false,
  status: 'pending',
  errorMessage: '',
};

export const hotelsSlice = createSlice({
  name: 'Hotels',
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
  fetchData: createAction('Hotels/fetchData'),
  fetchSuccess: createAction<Hotel[]>('Hotels/getHotelListSuccess'),
  fetchFailure: createAction<String>('Hotels/getHotelListFailure'),
};

export const { fetchData, getHotelListFailure, getHotelListSuccess } =
  hotelsSlice.actions;
