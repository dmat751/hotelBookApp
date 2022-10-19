import { HotelList } from './../../app/components/HotelList/HotelList';
import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { Hotel, HotelListSliceState } from '../../app/types/hotel';

export const initialState: HotelListSliceState = {
  hotelList: [],
  isError: false,
  isLoading: false,
  errorMessage: '',
};

export const hotelListSlice = createSlice({
  name: 'hotelList',
  initialState,
  reducers: {
    fetchData: (state) => {
      state.isLoading = true;
    },
    getHotelListSuccess: (state, { payload }: PayloadAction<Hotel[]>) => {
      state.hotelList = payload;
      state.isLoading = false;
    },
    getHotelListFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
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
