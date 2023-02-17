import { initialState } from './../../modules/Hotels/Slice';
import { hotelFiltersSliceInitialState } from '../../modules/HotelFilters/Slice';
import { fetchedHotelsWithRoomsData } from '../../mocks/hotelsWithRoomsData/hotelsWithRoomsData';
import { RootState } from './store';

export const resetRootState = (rootState: RootState) =>
  (rootState = {
    hotelFilters: hotelFiltersSliceInitialState,
    hotelList: {
      hotelList: fetchedHotelsWithRoomsData,
      errorMessage: '',
      isError: false,
      status: 'pending',
    },
  });
