import { RootState } from '../../app/types/rootState';

export const selectHotelListStatus = (state: RootState) =>
  state.hotelList.dataStatus;
