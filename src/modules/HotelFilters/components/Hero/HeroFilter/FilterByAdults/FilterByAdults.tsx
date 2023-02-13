import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../app/store/hooks';
import { selectAdultsFilter } from '../../../../Selectors';
import { setAdultsFilter } from '../../../../Slice';
import { FilterAmount } from '../FilterAmount/FilterAmount';
import {selectMaxAdultsInHotels} from "../../../../../Hotels/Selectors";

export const FilterByAdults = () => {
  const currentFilterAmount = useAppSelector(selectAdultsFilter);
  const maxAdults = useAppSelector(selectMaxAdultsInHotels);
  const dispatch = useAppDispatch();

  const onIncreaseFilter = useCallback((): void => {
    dispatch(setAdultsFilter('ADD'));
  }, [dispatch]);

  const onDecreaseFilter = useCallback((): void => {
    dispatch(setAdultsFilter('SUB'));
  }, [dispatch]);

  return (
    <FilterAmount
      currentFilterAmount={currentFilterAmount}
      filterLabel="Adults"
      isPlusButtonDisabled={currentFilterAmount >= maxAdults}
      onDecreaseFilterHandler={onDecreaseFilter}
      onIncreaseFilterHandler={onIncreaseFilter}
      dataTestIdPrefix="adults-filter"
    />
  );
};
