import type { FilterAction } from '@/modules/HotelFilters/types/FilterAction';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from '@store/hooks';
import { useCallback } from 'react';

type UseGuestFilterCounter = {
  currentFilterAmount: number;
  isPlusButtonDisabled: boolean;
  handleDecrease: () => void;
  handleIncrease: () => void;
};

export const useGuestFilterCounter = (
  setFilter: ActionCreatorWithPayload<FilterAction, string>,
  maxFilterValue: number,
  currentFilterAmount: number
): UseGuestFilterCounter => {
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
