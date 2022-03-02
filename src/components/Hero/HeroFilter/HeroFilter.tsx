import { Children, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectHotelList } from '../../../store';
import hotelListSlice, { HotelsFilters } from '../../../store/hotelListSlice';
import FilterAmount from './FilterAmount/FilterAmount';
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
  const hotelListItem = useSelector(selectHotelList);
  const initStarAmount = hotelListItem.filters.stars;
  const currentChildrenState = hotelListItem.filters.children;
  const currentAdultState = hotelListItem.filters.adults;
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

  const onClickIncreaseChildrenHandler = (): void => {
    const newChildrenState = AmountFilterNextValueGenerator(
      '+',
      currentChildrenState
    );
    const hotelFilters: HotelsFilters = {
      adults: hotelListItem.filters.adults,
      children: newChildrenState,
      stars: hotelListItem.filters.stars,
    };
    dispatch(hotelListSlice.actions.setHotelFilters(hotelFilters));
  };

  const onClickDecreaseChildrenHandler = (): void => {
    const newChildrenState = AmountFilterNextValueGenerator(
      '-',
      currentChildrenState
    );

    const hotelFilters: HotelsFilters = {
      adults: hotelListItem.filters.adults,
      children: newChildrenState,
      stars: hotelListItem.filters.stars,
    };
    dispatch(hotelListSlice.actions.setHotelFilters(hotelFilters));
  };

  const onClickDecraseAdultHandler = (): void => {
    const newAdultState = AmountFilterNextValueGenerator(
      '-',
      currentAdultState
    );

    const hotelFilters: HotelsFilters = {
      adults: newAdultState,
      children: hotelListItem.filters.children,
      stars: hotelListItem.filters.stars,
    };
    dispatch(hotelListSlice.actions.setHotelFilters(hotelFilters));
  };

  const onClickIncreaseAdultHandler = (): void => {
    const newAdultState = AmountFilterNextValueGenerator(
      '+',
      currentAdultState
    );

    const hotelFilters: HotelsFilters = {
      adults: newAdultState,
      children: hotelListItem.filters.children,
      stars: hotelListItem.filters.stars,
    };
    dispatch(hotelListSlice.actions.setHotelFilters(hotelFilters));
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
                clickedStarID={key}
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
