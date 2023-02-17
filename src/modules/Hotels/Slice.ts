import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { Hotel } from './types/Hotel';
import { HotelsSliceState } from './types/HotelsSliceState';

export const initialState: HotelsSliceState = {
  hotels: [],
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
    getHotelsSuccess: (state, { payload }: PayloadAction<Hotel[]>) => {
      state.hotels = payload;
      state.status = 'resolved';
    },
    getHotelsFailure: (state, { payload }: PayloadAction<string>) => {
      state.status = 'resolved';
      state.isError = true;
      state.errorMessage = payload;
      state.hotels = [];
    },
  },
});

export const hotelsActions = {
  fetchData: createAction('Hotels/fetchData'),
  fetchSuccess: createAction<Hotel[]>('Hotels/getHotelsSuccess'),
  fetchFailure: createAction<String>('Hotels/getHotelsFailure'),
};

export const { fetchData, getHotelsFailure, getHotelsSuccess } =
  hotelsSlice.actions;
