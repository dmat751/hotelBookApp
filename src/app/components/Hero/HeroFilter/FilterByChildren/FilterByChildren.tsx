import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectChildrenFilter } from '../../../../../modules/hotelFilters/hotelFiltersSelectors';
import { setChildrenFilter } from '../../../../../modules/hotelFilters/hotelFiltersSlice';
import { selectMaxChildrenInHotels } from '../../../../../modules/hotelList/selectors/maxChildrenSelector';
import { FilterAmount } from '../FilterAmount/FilterAmount';

export const FilterByChildren = () => {
  const currentFilterAmount = useSelector(selectChildrenFilter);
  const maxChildren = useSelector(selectMaxChildrenInHotels);
  const dispatch = useDispatch();

  const handleOnIncrease = useCallback((): void => {
    dispatch(setChildrenFilter('ADD'));
  }, [dispatch]);

  const handleOnDecrease = useCallback((): void => {
    dispatch(setChildrenFilter('SUB'));
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
