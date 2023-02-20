import { Stars } from '@/components/Stars/Stars';
import { selectStarsFilter } from '@/modules/HotelFilters/selectors';
import { setStarsFilter } from '@/modules/HotelFilters/slice';
import { selectMaxHotelStars } from '@/modules/Hotels/selectors';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { useCallback } from 'react';

export const StarFilter = () => {
  const currentStarsAmount = useAppSelector(selectStarsFilter);
  const maxStarsAmount = useAppSelector(selectMaxHotelStars);
  const dispatch = useAppDispatch();

  const handleClick = useCallback(
    (starIndex: number): void => {
      dispatch(setStarsFilter(starIndex + 1));
    },
    [dispatch]
  );

  return (
    <div className="flex">
      <Stars
        borderColor="#fff500"
        fillColor="#fff500"
        numberOfSelectedStars={currentStarsAmount}
        numberOfStars={maxStarsAmount}
        onClick={handleClick}
      />
    </div>
  );
};
