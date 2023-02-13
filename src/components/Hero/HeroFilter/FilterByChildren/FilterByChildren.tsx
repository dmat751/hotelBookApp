import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import { selectChildrenFilter } from '../../../../modules/hotelFilters/hotelFiltersSelectors';
import { setChildrenFilter } from '../../../../modules/hotelFilters/hotelFiltersSlice';
import { FilterAmount } from '../FilterAmount/FilterAmount';
import {selectMaxChildrenInHotels} from "../../../../modules/hotelList/selectors";

export const FilterByChildren = () => {
  const currentFilterAmount = useAppSelector(selectChildrenFilter);
  const maxChildren = useAppSelector(selectMaxChildrenInHotels);
  const dispatch = useAppDispatch();

  const onIncreaseFilter = useCallback((): void => {
    dispatch(setChildrenFilter('ADD'));
  }, [dispatch]);

  const onDecreaseFilter = useCallback((): void => {
    dispatch(setChildrenFilter('SUB'));
  }, [dispatch]);

  return (
    <FilterAmount
      currentFilterAmount={currentFilterAmount}
      filterLabel="Children"
      isPlusButtonDisabled={currentFilterAmount >= maxChildren}
      onDecreaseFilterHandler={onDecreaseFilter}
      onIncreaseFilterHandler={onIncreaseFilter}
      dataTestIdPrefix="children-filter"
    />
  );
};
