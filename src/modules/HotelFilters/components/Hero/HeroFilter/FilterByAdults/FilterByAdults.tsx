import { useCallback } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../app/store/hooks';
import { selectAdultsFilter } from '../../../../selectors';
import { setAdultsFilter } from '../../../../slice';
import { FilterAmount } from '../FilterAmount/FilterAmount';
import { selectMaxAdultsInHotels } from '../../../../../Hotels/selectors';

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
