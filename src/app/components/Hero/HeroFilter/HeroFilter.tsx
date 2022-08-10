import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectHotelFilters } from '../../../store';
import hotelFiltersSlice from '../../../store/hotelFiltersSlice';
import FilterAmount from './FilterAmount/FilterAmount';
import FilterStar from './FilterStar/FilterStar';
import classes from './HeroFilter.module.scss';
import { HotelsFilters } from '../../../store/hotelFiltersSlice';

const starColor1 = '#fff500';
const starColor2 = 'transparent';

interface starOptions {
  borderColor: string;
  fillColor: string;
}

interface starWidgetState {
  starArray: starOptions[];
}

const starActiveColor: starOptions = {
  borderColor: starColor1,
  fillColor: starColor1,
};

const starInactiveColor: starOptions = {
  borderColor: starColor1,
  fillColor: starColor2,
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

const setFiltersState = (dispatch: any, newHotelFilters: HotelsFilters) => {
  dispatch(hotelFiltersSlice.actions.setHotelFilters(newHotelFilters));
  dispatch(hotelFiltersSlice.actions.setFilterLoading(true));
  setTimeout(() => {
    dispatch(hotelFiltersSlice.actions.setFilterLoading(false));
  }, 500);
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
    setFiltersState(dispatch, newHotelFilters);
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
    setFiltersState(dispatch, newHotelFilters);
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
    setFiltersState(dispatch, newHotelFilters);
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
    setFiltersState(dispatch, newHotelFilters);
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
    setFiltersState(dispatch, newHotelFilters);
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
          isMinusButtonDisabled={hotelFilters.children === 0 ? true : false}
          isPlusButtonDisabled={false}
        />

        <FilterAmount
          onIncreaseFilterHandler={onClickIncreaseAdultHandler}
          onDecreaseFilterHandler={onClickDecraseAdultHandler}
          currentFilterAmount={currentAdultState}
          filterLabel={'Adults:'}
          isMinusButtonDisabled={hotelFilters.adults === 0 ? true : false}
          isPlusButtonDisabled={false}
        />
      </div>
    </div>
  );
};
export default FormFilter;
