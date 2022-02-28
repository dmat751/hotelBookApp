import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import hotelListSlice, { HotelsFilters } from '../../../store/hotelListSlice';
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

const starInActiveColor: starOptions = {
  borderColor: 'yellow',
  fillColor: 'transparent',
};

const FormFilter = () => {
  // const starInputRef = useRef<HTMLInputElement>(null);
  // const dispatch = useDispatch();

  // const searchHandler = (event: React.SyntheticEvent) => {
  //   event.preventDefault();

  //   const enteredStarAmount = starInputRef.current?.value;
  //   const numberStarAmount = parseInputToNumber(enteredStarAmount);
  //   const hotelFilters: HotelsFilters = {
  //     adults: 2,
  //     children: 0,
  //     stars: numberStarAmount,
  //   };
  //   dispatch(hotelListSlice.actions.setHotelFilters(hotelFilters));
  // };

  const initStarState: starWidgetState = {
    starArray: [
      starInActiveColor,
      starInActiveColor,
      starInActiveColor,
      starInActiveColor,
      starInActiveColor,
    ],
  };

  const onClickHandler = (starIndex: number): void => {
    const newStarState: starWidgetState = { starArray: [] };
    for (let i = 0; i < initStarState.starArray.length; i++) {
      if (i <= starIndex) {
        newStarState.starArray.push(starActiveColor);
      } else {
        newStarState.starArray.push(starInActiveColor);
      }
    }
    setStarState(newStarState);
  };

  const [starState, setStarState] = useState(initStarState);

  return (
    <div className={classes.filter}>
      <div className={classes.filter__content}>
        {starState.starArray.map((starItem, key) => {
          return (
            <FilterStar
              key={key}
              onClickHandler={onClickHandler.bind(null, key)}
              clickedStarID={key}
              borderColor={starItem.borderColor}
              fillColor={starItem.fillColor}
            />
          );
        })}

        <button>Search</button>
      </div>
    </div>
  );
};
export default FormFilter;
