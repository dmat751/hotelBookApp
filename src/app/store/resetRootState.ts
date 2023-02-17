import { hotelFiltersSliceInitialState } from '../../modules/HotelFilters/Slice';
import { fetchedHotelsWithRoomsData } from '../../mocks/hotelsWithRoomsData/hotelsWithRoomsData';
import { RootState } from './store';

export const resetRootState = (rootState: RootState) =>
  (rootState = {
    hotelFilters: hotelFiltersSliceInitialState,
    hotels: {
      hotels: fetchedHotelsWithRoomsData,
      errorMessage: '',
      isError: false,
      status: 'pending',
    },
  });
