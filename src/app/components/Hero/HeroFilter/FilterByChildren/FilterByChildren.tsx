import { useDispatch, useSelector } from 'react-redux';
import { selectChildrenFilter } from '../../../../../modules/hotelFilters/hotelFiltersSelectors';
import { hotelFiltersSlice } from '../../../../../modules/hotelFilters/hotelFiltersSlice';
import { selectMaxChildrenInHotels } from '../../../../../modules/hotelList/selectors/maxChildrenSelector';
import { FilterAmount } from '../FilterAmount/FilterAmount';

export const FilterByChildren = () => {
  const currentFilterAmount = useSelector(selectChildrenFilter);
  const maxChildren = useSelector(selectMaxChildrenInHotels);
  const dispatch = useDispatch();

  const handleOnIncrease = (): void => {
    dispatch(hotelFiltersSlice.actions.setChildrenFilter('ADD'));
  };

  const handleOnDecrease = (): void => {
    dispatch(hotelFiltersSlice.actions.setChildrenFilter('SUB'));
  };

  return (
    <FilterAmount
      currentFilterAmount={currentFilterAmount}
      filterLabel="Children"
      isPlusButtonDisabled={currentFilterAmount >= maxChildren}
      onDecreaseFilterHandler={handleOnDecrease}
      onIncreaseFilterHandler={handleOnIncrease}
    />
  );
};
