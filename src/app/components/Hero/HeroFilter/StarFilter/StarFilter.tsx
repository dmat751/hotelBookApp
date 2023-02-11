import { useDispatch, useSelector } from 'react-redux';
import { selectStarsFilter } from '../../../../../modules/hotelFilters/hotelFiltersSelectors';
import { hotelFiltersSlice } from '../../../../../modules/hotelFilters/hotelFiltersSlice';
import { Stars } from '../../../Stars/Stars';
import { selectMaxHotelStars } from '../../../../../modules/hotelList/selectors/selectMaxHotelStars';

export const StarFilter = () => {
  const currentStarsAmount = useSelector(selectStarsFilter);
  const maxStarsAmount = useSelector(selectMaxHotelStars);
  const dispatch = useDispatch();

  const onClickHandlerStar = (starIndex: number): void => {
    dispatch(hotelFiltersSlice.actions.setStarsFilter(starIndex + 1));
  };

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
