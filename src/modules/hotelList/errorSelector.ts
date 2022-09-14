import { RootState } from '../../app/types/rootState';

export const selectHotelListError = (state: RootState) => state.hotelList.error;
