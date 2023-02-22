import { useAppSelector } from '@store/hooks';
import { FilterAmount } from '@/modules/HotelFilters/components/Hero/HeroFilter/FilterAmount/FilterAmount';
import { selectAdultsFilter } from '@/modules/HotelFilters/selectors';
import { setAdultsFilter } from '@/modules/HotelFilters/slice';
import { selectMaxAdultsInHotels } from '@/modules/Hotels/selectors';
import { useGuestFilterCounter } from '@/modules/HotelFilters/hooks/useGuestFilterCounter';

export const FilterByAdults = () => {
  const {
    handleDecrease,
    handleIncrease,
    isPlusButtonDisabled,
    currentFilterAmount,
  } = useGuestFilterCounter(
    setAdultsFilter,
    useAppSelector(selectMaxAdultsInHotels),
    useAppSelector(selectAdultsFilter)
  );

  return (
    <FilterAmount
      currentFilterAmount={currentFilterAmount}
      filterLabel="Adults"
      isPlusButtonDisabled={isPlusButtonDisabled}
      onDecrease={handleDecrease}
      onIncrease={handleIncrease}
      dataTestIdPrefix="adults-filter"
    />
  );
};
