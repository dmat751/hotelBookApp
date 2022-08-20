import { useDispatch, useSelector } from 'react-redux';
import { hotelFiltersSlice } from '../../../../modules/hotelFilters/hotelFiltersSlice';
import classes from './HeroFilter.module.scss';
import { FilterAmount } from './FilterAmount/FilterAmount';
import {
  selectAdultsFilter,
  selectChildrenFilter,
} from '../../../../modules/hotelFilters/hotelFiltersSelectors';
import { StarFilter } from './StarFilter/StarFilter';
import { setRefreshAnim } from '../../../../UI/Spinner/refreshFiltersAnim';
import { FilterByChildren } from './FilterByChildren/FilterByChildren';
import { FilterByAdults } from './FilterByAdults/FilterByAdults';

export const FormFilter = () => {
  const currentChildrenState = useSelector(selectChildrenFilter);
  const currentAdultState = useSelector(selectAdultsFilter);
  const dispatch = useDispatch();

  const onClickIncreaseChildrenHandler = (): void => {
    dispatch(hotelFiltersSlice.actions.setChildrenFilter('ADD'));
    setRefreshAnim(dispatch);
  };

  const onClickDecreaseChildrenHandler = (): void => {
    dispatch(hotelFiltersSlice.actions.setChildrenFilter('SUB'));
    setRefreshAnim(dispatch);
  };

  const onClickDecraseAdultHandler = (): void => {
    dispatch(hotelFiltersSlice.actions.setAdultsFilter('SUB'));
    setRefreshAnim(dispatch);
  };

  const onClickIncreaseAdultHandler = (): void => {
    dispatch(hotelFiltersSlice.actions.setAdultsFilter('ADD'));
    setRefreshAnim(dispatch);
  };

  return (
    <div className={classes.filter}>
      <div className={classes.filter__content}>
        <StarFilter
          starColor1="#fff500"
          starColor2="transparent"
          maxHotelRateStarAmount={5}
        />
        <FilterByChildren />
        <FilterByAdults />
      </div>
    </div>
  );
};
