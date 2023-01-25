import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdultsFilter } from '../../../../../modules/hotelFilters/hotelFiltersSelectors';
import { setAdultsFilter } from '../../../../../modules/hotelFilters/hotelFiltersSlice';
import { selectMaxAdultsInHotels } from '../../../../../modules/hotelList/selectors/maxFilterValueSelectors';
import { FilterAmount } from '../FilterAmount/FilterAmount';

export const FilterByAdults = () => {
  const currentFilterAmount = useSelector(selectAdultsFilter);
  const maxAdults = useSelector(selectMaxAdultsInHotels);
  const dispatch = useDispatch();

  const handleOnIncrease = useCallback((): void => {
    dispatch(setAdultsFilter('ADD'));
  }, [dispatch]);

  const handleOnDecrease = useCallback((): void => {
    dispatch(setAdultsFilter('SUB'));
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
