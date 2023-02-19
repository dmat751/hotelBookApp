import { useAppSelector, useAppDispatch } from '@store/hooks';
import { FilterAmount } from '@/modules/HotelFilters/components/Hero/HeroFilter/FilterAmount/FilterAmount';
import { selectChildrenFilter } from '@/modules/HotelFilters/selectors';
import { setChildrenFilter } from '@/modules/HotelFilters/slice';
import { selectMaxChildrenInHotels } from '@/modules/Hotels/selectors';
import { useCallback } from 'react';

export const FilterByChildren = () => {
  const currentFilterAmount = useAppSelector(selectChildrenFilter);
  const maxChildren = useAppSelector(selectMaxChildrenInHotels);
  const dispatch = useAppDispatch();

  const handleIncrease = useCallback((): void => {
    dispatch(setChildrenFilter('ADD'));
  }, [dispatch]);

  const handleDecrease = useCallback((): void => {
    dispatch(setChildrenFilter('SUB'));
  }, [dispatch]);

  return (
    <FilterAmount
      currentFilterAmount={currentFilterAmount}
      filterLabel="Children"
      isPlusButtonDisabled={currentFilterAmount >= maxChildren}
      onDecrease={handleDecrease}
      onIncrease={handleIncrease}
      dataTestIdPrefix="children-filter"
    />
  );
};
