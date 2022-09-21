import { createSlice, createAction } from '@reduxjs/toolkit';
import { Hotel, HotelListSliceState } from '../../app/types/hotel';

const initialState: HotelListSliceState = {
  hotelList: [],
  isError: false,
  isLoading: false,
  errorType: '',
};

export const hotelListSlice = createSlice({
  name: 'hotelList',
  initialState,
  reducers: {
    fetchData: (state) => {
      state.isLoading = true;
    },
    getHotelListSuccess: (state, action) => {
      state.hotelList = action.payload;
      state.isLoading = false;
    },
    getHotelListFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorType = action.payload;
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
