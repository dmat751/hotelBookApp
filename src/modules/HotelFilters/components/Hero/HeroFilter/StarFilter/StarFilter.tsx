import { selectStarsFilter } from '../../../../Selectors';
import { setStarsFilter } from '../../../../Slice';
import { Stars } from '../../../../../../components/Stars/Stars';
import { useCallback } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../app/store/hooks';
import { selectMaxHotelStars } from '../../../../../Hotels/Selectors';

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