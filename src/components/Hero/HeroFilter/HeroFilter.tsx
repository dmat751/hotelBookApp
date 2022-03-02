import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectHotelFilters } from '../../../store';
import hotelFiltersSlice from '../../../store/hotelFiltersSlice';
import FilterAmount from './FilterAmount/FilterAmount';
import FilterStar from './FilterStar/FilterStar';
import classes from './HeroFilter.module.scss';
import { HotelsFilters } from './../../../store/hotelFiltersSlice';

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

const AmountFilterNextValueGenerator = (
  operationType: string,
  prevState: number
): number => {
  let newState;
  if (operationType === '-') {
    if (prevState > 0) {
      newState = prevState - 1;
    } else {
      newState = prevState;
    }
    return newState;
  } else if (operationType === '+') {
    const newState = prevState + 1;
    return newState;
  } else {
    return prevState;
  }
};

const FormFilter = () => {
  const maxHotelRateStarAmount = 5;
  const hotelFilters = useSelector(selectHotelFilters);
  const initStarAmount = hotelFilters.stars;
  const currentChildrenState = hotelFilters.children;
  const currentAdultState = hotelFilters.adults;
  const dispatch = useDispatch();

  const onClickHandlerStar = (starIndex: number): void => {
    const newStarState: starWidgetState = generateStarState(
      maxHotelRateStarAmount,
      starIndex + 1
    );

    setStarState(newStarState);
    const newHotelFilters: HotelsFilters = {
      ...hotelFilters,
      stars: starIndex + 1,
    };
    dispatch(hotelFiltersSlice.actions.setHotelFilters(newHotelFilters));
  };

  const onClickIncreaseChildrenHandler = (): void => {
    const newChildrenState = AmountFilterNextValueGenerator(
      '+',
      currentChildrenState
    );
    const newHotelFilters: HotelsFilters = {
      ...hotelFilters,
      children: newChildrenState,
    };
    dispatch(hotelFiltersSlice.actions.setHotelFilters(newHotelFilters));
  };

  const onClickDecreaseChildrenHandler = (): void => {
    const newChildrenState = AmountFilterNextValueGenerator(
      '-',
      currentChildrenState
    );

    const newHotelFilters: HotelsFilters = {
      ...hotelFilters,
      children: newChildrenState,
    };
    dispatch(hotelFiltersSlice.actions.setHotelFilters(newHotelFilters));
  };

  const onClickDecraseAdultHandler = (): void => {
    const newAdultState = AmountFilterNextValueGenerator(
      '-',
      currentAdultState
    );

    const newHotelFilters: HotelsFilters = {
      ...hotelFilters,
      adults: newAdultState,
    };
    dispatch(hotelFiltersSlice.actions.setHotelFilters(newHotelFilters));
  };

  const onClickIncreaseAdultHandler = (): void => {
    const newAdultState = AmountFilterNextValueGenerator(
      '+',
      currentAdultState
    );

    const newHotelFilters: HotelsFilters = {
      ...hotelFilters,
      adults: newAdultState,
    };
    dispatch(hotelFiltersSlice.actions.setHotelFilters(newHotelFilters));
  };

  const initStarState: starWidgetState = generateStarState(
    maxHotelRateStarAmount,
    initStarAmount
  );

  const [starState, setStarState] = useState(initStarState);

  return (
    <div className={classes.filter}>
      <div className={classes.filter__content}>
        <div className={classes.stars}>
          {starState.starArray.map((starItem, key) => {
            return (
              <FilterStar
                key={key}
                onClickHandler={onClickHandlerStar.bind(null, key)}
                borderColor={starItem.borderColor}
                fillColor={starItem.fillColor}
              />
            );
          })}
        </div>

        <FilterAmount
          onIncreaseFilterHandler={onClickIncreaseChildrenHandler}
          onDecreaseFilterHandler={onClickDecreaseChildrenHandler}
          currentFilterAmount={currentChildrenState}
          filterLabel={'Children:'}
        />

        <FilterAmount
          onIncreaseFilterHandler={onClickIncreaseAdultHandler}
          onDecreaseFilterHandler={onClickDecraseAdultHandler}
          currentFilterAmount={currentAdultState}
          filterLabel={'Adults:'}
        />
      </div>
    </div>
  );
};
export default FormFilter;
