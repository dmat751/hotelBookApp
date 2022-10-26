import { useDispatch, useSelector } from 'react-redux';
import { selectAdultsFilter } from '../../../../../modules/hotelFilters/hotelFiltersSelectors';
import { setAdultsFilter } from '../../../../../modules/hotelFilters/hotelFiltersSlice';
import { selectMaxAdultsInHotels } from '../../../../../modules/hotelList/selectors/maxAdultsSelector';
import { FilterAmount } from '../FilterAmount/FilterAmount';

export const FilterByAdults = () => {
  const currentFilterAmount = useSelector(selectAdultsFilter);
  const maxAdults = useSelector(selectMaxAdultsInHotels);
  const dispatch = useDispatch();

  const handleOnIncrease = (): void => {
    dispatch(setAdultsFilter('ADD'));
  };

  const handleOnDecrease = (): void => {
    dispatch(setAdultsFilter('SUB'));
  };

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
