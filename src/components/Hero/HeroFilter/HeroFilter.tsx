import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectHotelList } from '../../../store';
import hotelListSlice, { HotelsFilters } from '../../../store/hotelListSlice';
import FilterChildren from './FilterChildren/FilterChildren';
import FilterStar from './FilterStar/FilterStar';
import classes from './HeroFilter.module.scss';

interface starOptions {
  borderColor: string;
  fillColor: string;
}

interface starWidgetState {
  starArray: starOptions[];
}

const starActiveColor: starOptions = {
  borderColor: 'yellow',
  fillColor: 'yellow',
};

const starInactiveColor: starOptions = {
  borderColor: 'yellow',
  fillColor: 'transparent',
};

const generateStarState = (
  starAmount: number,
  filledStarsAmount: number
): starWidgetState => {
  let newStarState: starWidgetState = { starArray: [] };
  for (let i = 1; i <= starAmount; i++) {
    if (i <= filledStarsAmount) {
      newStarState.starArray.push(starActiveColor);
    } else {
      newStarState.starArray.push(starInactiveColor);
    }
  }
  return newStarState;
};

const FormFilter = () => {
  const maxHotelRateStarAmount = 5;
  const hotelListItem = useSelector(selectHotelList);
  const initStarAmount = hotelListItem.filters.stars;
  console.log(initStarAmount);
  const dispatch = useDispatch();

  const onClickHandlerStar = (starIndex: number): void => {
    const newStarState: starWidgetState = generateStarState(
      maxHotelRateStarAmount,
      starIndex + 1
    );

    setStarState(newStarState);
    const hotelFilters: HotelsFilters = {
      adults: hotelListItem.filters.adults,
      children: hotelListItem.filters.children,
      stars: starIndex + 1,
    };
    dispatch(hotelListSlice.actions.setHotelFilters(hotelFilters));
  };

  const initStarState: starWidgetState = generateStarState(
    maxHotelRateStarAmount,
    initStarAmount
  );

  const [starState, setStarState] = useState(initStarState);
  // const [childrenState, setChildrenState] = useState(initChildrenState)

  return (
    <div className={classes.filter}>
      <div className={classes.filter__content}>
        {starState.starArray.map((starItem, key) => {
          return (
            <FilterStar
              key={key}
              onClickHandler={onClickHandlerStar.bind(null, key)}
              clickedStarID={key}
              borderColor={starItem.borderColor}
              fillColor={starItem.fillColor}
            />
          );
        })}

        <FilterChildren dummyVar="rf" />
      </div>
    </div>
  );
};
export default FormFilter;
