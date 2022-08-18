import { RootState } from '../../app/types/rootState';

export const selectAllHotelList = (state: RootState) =>
  state.hotelList.hotelList;
