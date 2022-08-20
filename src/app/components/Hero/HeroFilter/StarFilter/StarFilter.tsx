import classes from '../HeroFilter.module.scss';
import { FilterStar } from './StarItem/FilterStar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStarsFilter } from '../../../../../modules/hotelFilters/hotelFiltersSelectors';
import { hotelFiltersSlice } from '../../../../../modules/hotelFilters/hotelFiltersSlice';
import { setRefreshAnim } from '../../../../../UI/Spinner/refreshFiltersAnim';
import { StarOptions, StarWidgetState } from '../../../../types/star';

const generateStarState = (
  starAmount: number,
  filledStarsAmount: number,
  starActiveColor: StarOptions,
  starInactiveColor: StarOptions
): StarWidgetState => {
  let newStarState: StarWidgetState = { starArray: [] };
  for (let i = 1; i <= starAmount; i++) {
    newStarState.starArray.push(
      i <= filledStarsAmount ? starActiveColor : starInactiveColor
    );
  }
  return newStarState;
};

type Props = Readonly<{
  starColor1: string;
  starColor2: string;
  maxHotelRateStarAmount: number;
}>;
export const StarFilter = ({
  starColor1,
  starColor2,
  maxHotelRateStarAmount,
}: Props) => {
  const currentStarAmount = useSelector(selectStarsFilter);
  const starActiveColor: StarOptions = {
    borderColor: starColor1,
    fillColor: starColor1,
  };
  const starInactiveColor: StarOptions = {
    borderColor: starColor1,
    fillColor: starColor2,
  };
  const initStarState: StarWidgetState = generateStarState(
    maxHotelRateStarAmount,
    currentStarAmount,
    starActiveColor,
    starInactiveColor
  );
  const [starState, setStarState] = useState(initStarState);
  const dispatch = useDispatch();

  const onClickHandlerStar = (starIndex: number): void => {
    dispatch(hotelFiltersSlice.actions.setStarsFilter(starIndex + 1));
    setStarState(
      generateStarState(
        maxHotelRateStarAmount,
        starIndex + 1,
        starActiveColor,
        starInactiveColor
      )
    );
    setRefreshAnim(dispatch);
  };

  return (
    <div className={classes.stars}>
      {starState.starArray.map((starItem, key) => (
        <FilterStar
          key={key}
          onClickHandler={() => onClickHandlerStar(key)}
          borderColor={starItem.borderColor}
          fillColor={starItem.fillColor}
        />
      ))}
    </div>
  );
};
