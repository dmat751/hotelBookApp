import type { RootState } from '@store/store';
import { fetchedHotelsWithRoomsData } from '@/mocks/hotelsWithRoomsData/hotelsWithRoomsData';
import { initialState } from '@/modules/HotelFilters/slice';

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
