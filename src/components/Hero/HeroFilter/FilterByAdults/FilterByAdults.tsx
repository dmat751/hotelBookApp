import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import { selectAdultsFilter } from '../../../../modules/hotelFilters/hotelFiltersSelectors';
import { hotelFiltersSlice } from '../../../../modules/hotelFilters/hotelFiltersSlice';
import { selectMaxAdultsInHotels } from '../../../../modules/hotelList/selectors/selectMaxAdultsInHotels';
import { FilterAmount } from '../FilterAmount/FilterAmount';

export const FilterByAdults = () => {
  const currentFilterAmount = useAppSelector(selectAdultsFilter);
  const maxAdults = useAppSelector(selectMaxAdultsInHotels);
  const dispatch = useAppDispatch();

  const handleOnIncrease = useCallback((): void => {
    dispatch(hotelFiltersSlice.actions.setAdultsFilter('ADD'));
  }, [dispatch]);

  const handleOnDecrease = useCallback((): void => {
    dispatch(hotelFiltersSlice.actions.setAdultsFilter('SUB'));
  }, [dispatch]);

  return (
    <FilterAmount
      currentFilterAmount={currentFilterAmount}
      filterLabel="Adults"
      isPlusButtonDisabled={currentFilterAmount >= maxAdults}
      onDecreaseFilterHandler={handleOnDecrease}
      onIncreaseFilterHandler={handleOnIncrease}
      dataTestIdPrefix="adults-filter"
    />
  );
};
