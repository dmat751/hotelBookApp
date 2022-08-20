import { useDispatch, useSelector } from 'react-redux';
import { selectAdultsFilter } from '../../../../../modules/hotelFilters/hotelFiltersSelectors';
import { hotelFiltersSlice } from '../../../../../modules/hotelFilters/hotelFiltersSlice';
import { selectMaxAdultsInHotels } from '../../../../../modules/hotelList/maxAdultsSelector';
import { FilterAmount } from '../FilterAmount/FilterAmount';

export const FilterByAdults = () => {
  const currentFilterAmount = useSelector(selectAdultsFilter);
  const maxAdults = useSelector(selectMaxAdultsInHotels);
  const dispatch = useDispatch();

  const handleOnIncrease = (): void => {
    dispatch(hotelFiltersSlice.actions.setAdultsFilter('ADD'));
  };

  const handleOnDecrease = (): void => {
    dispatch(hotelFiltersSlice.actions.setAdultsFilter('SUB'));
  };

  return (
    <FilterAmount
      currentFilterAmount={currentFilterAmount}
      filterLabel="Adults"
      isMinusButtonDisabled={currentFilterAmount === 0}
      isPlusButtonDisabled={currentFilterAmount >= maxAdults}
      onDecreaseFilterHandler={handleOnDecrease}
      onIncreaseFilterHandler={handleOnIncrease}
    />
  );
};
