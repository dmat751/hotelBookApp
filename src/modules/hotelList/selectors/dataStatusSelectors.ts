import { RootState } from '../../../app/types/rootState';

export const selectIsDataStatus = (state: RootState) => state.hotelList.status;
export const selectErrorType = (state: RootState) =>
  state.hotelList.errorMessage;
export const selectIsDataError = (state: RootState) => state.hotelList.isError;
