import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiQueryStatus } from '../../app/types/apiQueryStatus';

const initialState: ApiQueryStatus = {
  isError: false,
  notification: '',
  isLoading: false,
};

export const ApiQueryStatusSlice = createSlice({
  name: 'apiQueryStatus',
  initialState,
  reducers: {
    setApiQueryStatus(state, action: PayloadAction<ApiQueryStatus>) {
      state.isError = action.payload.isError;
      state.isLoading = action.payload.isLoading;
      state.notification = action.payload.notification;
    },
  },
});

export const { setApiQueryStatus } = ApiQueryStatusSlice.actions;
