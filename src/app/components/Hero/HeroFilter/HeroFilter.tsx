import { useDispatch, useSelector } from 'react-redux';
import hotelFiltersSlice from '../../../../modules/hotelFilters/hotelFiltersSlice';
import classes from './HeroFilter.module.scss';
import { FilterAmount } from './FilterAmount/FilterAmount';
import {
  selectAdultsFilter,
  selectChildrenFilter,
} from '../../../../modules/hotelFilters/hotelFiltersSelectors';
import { operationSign } from '../../../types/operations';
import { StarFilter } from './StarFilter/StarFilter';
import { setRefreshAnim } from '../../../../UI/Spinner/refreshFiltersAnim';

export const FormFilter = () => {
  const currentChildrenState = useSelector(selectChildrenFilter);
  const currentAdultState = useSelector(selectAdultsFilter);
  const dispatch = useDispatch();

  const onClickIncreaseChildrenHandler = (): void => {
    dispatch(hotelFiltersSlice.actions.setChildrenFilter(operationSign.plus));
    setRefreshAnim(dispatch);
  };

  const onClickDecreaseChildrenHandler = (): void => {
    dispatch(hotelFiltersSlice.actions.setChildrenFilter(operationSign.minus));
    setRefreshAnim(dispatch);
  };

  const onClickDecraseAdultHandler = (): void => {
    dispatch(hotelFiltersSlice.actions.setAdultsFilter(operationSign.minus));
    setRefreshAnim(dispatch);
  };

  const onClickIncreaseAdultHandler = (): void => {
    dispatch(hotelFiltersSlice.actions.setAdultsFilter(operationSign.plus));
    setRefreshAnim(dispatch);
  };

  return (
    <div className={classes.filter}>
      <div className={classes.filter__content}>
        <StarFilter
          starColor1={'#fff500'}
          starColor2={'transparent'}
          maxHotelRateStarAmount={5}
        />

        <FilterAmount
          onIncreaseFilterHandler={onClickIncreaseChildrenHandler}
          onDecreaseFilterHandler={onClickDecreaseChildrenHandler}
          currentFilterAmount={currentChildrenState}
          filterLabel={'Children:'}
          isMinusButtonDisabled={currentChildrenState === 0 ? true : false}
          isPlusButtonDisabled={false}
        />

        <FilterAmount
          onIncreaseFilterHandler={onClickIncreaseAdultHandler}
          onDecreaseFilterHandler={onClickDecraseAdultHandler}
          currentFilterAmount={currentAdultState}
          filterLabel={'Adults:'}
          isMinusButtonDisabled={currentAdultState === 0 ? true : false}
          isPlusButtonDisabled={false}
        />
      </div>
    </div>
  );
};
