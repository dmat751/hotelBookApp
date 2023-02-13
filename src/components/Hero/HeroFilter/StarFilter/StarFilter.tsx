import { selectStarsFilter } from '../../../../modules/hotelFilters/hotelFiltersSelectors';
import { setStarsFilter } from '../../../../modules/hotelFilters/hotelFiltersSlice';
import { Stars } from '../../../Stars/Stars';
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import {selectMaxHotelStars} from "../../../../modules/hotelList/selectors";

export const StarFilter = () => {
  const currentStarsAmount = useAppSelector(selectStarsFilter);
  const maxStarsAmount = useAppSelector(selectMaxHotelStars);
  const dispatch = useAppDispatch();

  const onClickHandlerStar = useCallback(
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
        numberOfSelectedStarts={currentStarsAmount}
        numberOfStars={maxStarsAmount}
        onFilterChange={onClickHandlerStar}
      />
    </div>
  );
};
