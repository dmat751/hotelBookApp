import { useCallback } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../app/store/hooks';
import { selectChildrenFilter } from '../../../../selectors';
import { setChildrenFilter } from '../../../../slice';
import { FilterAmount } from '../FilterAmount/FilterAmount';
import { selectMaxChildrenInHotels } from '../../../../../Hotels/selectors';

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
