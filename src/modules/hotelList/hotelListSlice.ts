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
    fetchData: ({ isLoading }) => {
      isLoading = true;
    },
    getHotelListSuccess: ({ hotelList, isLoading }, { payload }) => {
      hotelList = payload;
      isLoading = false;
    },
    getHotelListFailure: (
      { isLoading, isError, errorType, hotelList },
      { payload }
    ) => {
      isLoading = false;
      isError = true;
      errorType = payload;
      hotelList = [];
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
