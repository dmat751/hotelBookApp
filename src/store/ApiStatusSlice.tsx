import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ApiQueryStatus {
  notification: string;
  isError: boolean;
  isLoading: boolean;
}

const initialState: ApiQueryStatus = {
  isError: false,
  notification: '',
  isLoading: false,
};

const ApiQueryStatusSlice = createSlice({
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

export default ApiQueryStatusSlice;
