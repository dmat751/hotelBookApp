import { hotelFiltersSlice } from '../../modules/hotelFilters/hotelFiltersSlice';
import { Dispatch } from 'redux';

export const setRefreshAnim = (dispatch: Dispatch<any>) => {
  dispatch(hotelFiltersSlice.actions.setFilterLoading(true));
  setTimeout(() => {
    dispatch(hotelFiltersSlice.actions.setFilterLoading(false));
  }, 500);
};
