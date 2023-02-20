import type { Hotel } from '@/modules/Hotels/types/Hotel';
import type { HotelsSliceState } from '@/modules/Hotels/types/HotelsSliceState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: HotelsSliceState = {
  hotels: [],
  isError: false,
  status: 'idle',
  errorMessage: '',
};

export const hotelsSlice = createSlice({
  name: 'Hotels',
  initialState,
  reducers: {
    fetchedHotels: (state) => {
      state.status = 'pending';
    },
    fetchedHotelsSuccess: (state, { payload }: PayloadAction<Hotel[]>) => {
      state.hotels = payload;
      state.status = 'resolved';
    },
    fetchedHotelsFailed: (state, { payload }: PayloadAction<string>) => {
      state.status = 'resolved';
      state.isError = true;
      state.errorMessage = payload;
      state.hotels = [];
    },
  },
});

export const hotelsActions = {
  fetchData: 'Hotels/fetchedHotels',
  fetchSuccess: 'Hotels/fetchedHotelsSuccess',
  fetchFailure: 'Hotels/fetchedHotelsFailed',
};

export const { fetchedHotels, fetchedHotelsFailed, fetchedHotelsSuccess } =
  hotelsSlice.actions;
