import { RootState } from '../../../app/types/rootState';

export const selectIsDataLoading = (state: RootState) =>
  state.hotelList.isLoading;
export const selectErrorType = (state: RootState) => state.hotelList.errorType;
export const selectIsDataError = (state: RootState) => state.hotelList.isError;
