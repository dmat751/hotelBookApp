import { RootState } from '../../../app/types/rootState';

export const selectIsDataLoading = (state: RootState) =>
  state.hotelList.isLoading;
export const selectErrorType = (state: RootState) =>
  state.hotelList.errorMessage;
export const selectIsDataError = (state: RootState) => state.hotelList.isError;
