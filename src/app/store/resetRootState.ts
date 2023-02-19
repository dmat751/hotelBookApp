import { initialState } from '../../modules/HotelFilters/slice';
import { fetchedHotelsWithRoomsData } from '../../mocks/hotelsWithRoomsData/hotelsWithRoomsData';
import { RootState } from './store';

export const resetRootState = (rootState: RootState) =>
  (rootState = {
    hotelFilters: initialState,
    hotels: {
      hotels: fetchedHotelsWithRoomsData,
      errorMessage: '',
      isError: false,
      status: 'pending',
    },
  });
