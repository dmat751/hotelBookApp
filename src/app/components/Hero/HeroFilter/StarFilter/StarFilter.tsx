import classes from '../HeroFilter.module.scss';
import { FilterStar } from './StarItem/FilterStar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStarsFilter } from '../../../../../modules/hotelFilters/hotelFiltersSelectors';
import { hotelFiltersSlice } from '../../../../../modules/hotelFilters/hotelFiltersSlice';
import { setRefreshAnim } from '../../../../../UI/Spinner/refreshFiltersAnim';
import { StarOptions } from '../../../../types/star';
import nextId from 'react-id-generator';
import { useStarsStateBuilder } from '../../../../hooks/useStarsStateBuilder';

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
  const starsState: StarOptions[] = useStarsStateBuilder({
    activeStarAmount: currentStarAmount,
    maxStarAmount: maxHotelRateStarAmount,
    starColor1,
    starColor2,
  });
  const dispatch = useDispatch();

  const onClickHandlerStar = (starIndex: number): void => {
    dispatch(hotelFiltersSlice.actions.setStarsFilter(starIndex + 1));
    setRefreshAnim(dispatch);
  };

  return (
    <div className={classes.stars}>
      {starsState.map((starItem, key) => (
        <FilterStar
          key={nextId()}
          onClickHandler={() => onClickHandlerStar(key)}
          borderColor={starItem.borderColor}
          fillColor={starItem.fillColor}
        />
      ))}
    </div>
  );
};
