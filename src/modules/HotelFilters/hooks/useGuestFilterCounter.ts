import { FilterAction } from '@/modules/HotelFilters/types/FilterAction';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from '@store/hooks';
import { useCallback } from 'react';

export const useGuestFilterCounter = (
  setFilter: ActionCreatorWithPayload<FilterAction, string>,
  maxFilterValue: number,
  currentFilterAmount: number
) => {
  const dispatch = useAppDispatch();

  const handleIncrease = useCallback((): void => {
    dispatch(setFilter('ADD'));
  }, [dispatch, setFilter]);

  const handleDecrease = useCallback((): void => {
    dispatch(setFilter('SUB'));
  }, [dispatch, setFilter]);

  const isPlusButtonDisabled = currentFilterAmount >= maxFilterValue;

  return {
    currentFilterAmount,
    isPlusButtonDisabled,
    handleDecrease,
    handleIncrease,
  };
};
