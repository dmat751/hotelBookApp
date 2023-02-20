import { FilterAmount } from '@/modules/HotelFilters/components/Hero/HeroFilter/FilterAmount/FilterAmount';
import { selectAdultsFilter } from '@/modules/HotelFilters/selectors';
import { setAdultsFilter } from '@/modules/HotelFilters/slice';
import { selectMaxAdultsInHotels } from '@/modules/Hotels/selectors';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { useCallback } from 'react';

export const FilterByAdults = () => {
  const currentFilterAmount = useAppSelector(selectAdultsFilter);
  const maxAdults = useAppSelector(selectMaxAdultsInHotels);
  const dispatch = useAppDispatch();

  const handleIncrease = useCallback((): void => {
    dispatch(setAdultsFilter('ADD'));
  }, [dispatch]);

  const handleDecrease = useCallback((): void => {
    dispatch(setAdultsFilter('SUB'));
  }, [dispatch]);

  return (
    <FilterAmount
      currentFilterAmount={currentFilterAmount}
      filterLabel="Adults"
      isPlusButtonDisabled={currentFilterAmount >= maxAdults}
      onDecrease={handleDecrease}
      onIncrease={handleIncrease}
      dataTestIdPrefix="adults-filter"
    />
  );
};
