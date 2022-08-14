import { hotelFiltersSlice } from '../../modules/hotelFilters/hotelFiltersSlice';
import { Dispatch } from 'redux';

export const setRefreshAnim = (
  dispatch: Dispatch<{ payload: boolean; type: string }>
) => {
  dispatch(hotelFiltersSlice.actions.setFilterLoading(true));
  setTimeout(() => {
    dispatch(hotelFiltersSlice.actions.setFilterLoading(false));
  }, 500);
};
