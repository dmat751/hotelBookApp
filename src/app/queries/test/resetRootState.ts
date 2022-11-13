import { RootState } from './../../types/rootState';
import { fetchedHotelsWithRoomsData } from './../../../mocks/hotelsWithRoomsData/hotelsWithRoomsData';
import { initialState } from '../../../modules/hotelFilters/hotelFiltersSlice';

export const resetRootState = (rootState: RootState) =>
  (rootState = {
    hotelFilters: initialState,
    hotelList: {
      hotelList: fetchedHotelsWithRoomsData,
      errorMessage: '',
      isError: false,
      status: 'pending',
    },
  });
