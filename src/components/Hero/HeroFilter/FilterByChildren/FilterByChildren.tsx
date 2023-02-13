import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import { selectChildrenFilter } from '../../../../modules/hotelFilters/hotelFiltersSelectors';
import { hotelFiltersSlice } from '../../../../modules/hotelFilters/hotelFiltersSlice';
import { selectMaxChildrenInHotels } from '../../../../modules/hotelList/selectors/selectMaxChildrenInHotels';
import { FilterAmount } from '../FilterAmount/FilterAmount';

export const FilterByChildren = () => {
  const currentFilterAmount = useAppSelector(selectChildrenFilter);
  const maxChildren = useAppSelector(selectMaxChildrenInHotels);
  const dispatch = useAppDispatch();

  const handleOnIncrease = useCallback((): void => {
    dispatch(hotelFiltersSlice.actions.setChildrenFilter('ADD'));
  }, [dispatch]);

  const handleOnDecrease = useCallback((): void => {
    dispatch(hotelFiltersSlice.actions.setChildrenFilter('SUB'));
  }, [dispatch]);

  return (
    <FilterAmount
      currentFilterAmount={currentFilterAmount}
      filterLabel="Children"
      isPlusButtonDisabled={currentFilterAmount >= maxChildren}
      onDecreaseFilterHandler={handleOnDecrease}
      onIncreaseFilterHandler={handleOnIncrease}
      dataTestIdPrefix="children-filter"
    />
  );
};
