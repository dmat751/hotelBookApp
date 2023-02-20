import { useAppSelector } from '@store/hooks';
import { FilterAmount } from '@/modules/HotelFilters/components/Hero/HeroFilter/FilterAmount/FilterAmount';
import { selectChildrenFilter } from '@/modules/HotelFilters/selectors';
import { setChildrenFilter } from '@/modules/HotelFilters/slice';
import { selectMaxChildrenInHotels } from '@/modules/Hotels/selectors';
import { useGuestFilterCounter } from '@/modules/HotelFilters/hooks/useGuestFilterCounter';

export const FilterByChildren = () => {
  const {
    handleDecrease,
    handleIncrease,
    isPlusButtonDisabled,
    currentFilterAmount,
  } = useGuestFilterCounter(
    setChildrenFilter,
    useAppSelector(selectMaxChildrenInHotels),
    useAppSelector(selectChildrenFilter)
  );

  return (
    <FilterAmount
      currentFilterAmount={currentFilterAmount}
      filterLabel="Children"
      isPlusButtonDisabled={isPlusButtonDisabled}
      onDecrease={handleDecrease}
      onIncrease={handleIncrease}
      dataTestIdPrefix="children-filter"
    />
  );
};
