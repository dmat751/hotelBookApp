import classes from '../HeroFilter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectStarsFilter } from '../../../../../modules/hotelFilters/hotelFiltersSelectors';
import { hotelFiltersSlice } from '../../../../../modules/hotelFilters/hotelFiltersSlice';
import { setRefreshAnim } from '../../../../../UI/Spinner/refreshFiltersAnim';
import { Stars } from '../../../Stars/Stars';
import { selectMaxHotelStars } from '../../../../../modules/hotelList/maxHotelStarsSelector';

export const StarFilter = () => {
  const currentStarsAmount = useSelector(selectStarsFilter);
  const maxStarsAmount = useSelector(selectMaxHotelStars);
  const dispatch = useDispatch();

  const onClickHandlerStar = (starIndex: number): void => {
    dispatch(hotelFiltersSlice.actions.setStarsFilter(starIndex + 1));
  };

  return (
    <div className={classes.stars}>
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
