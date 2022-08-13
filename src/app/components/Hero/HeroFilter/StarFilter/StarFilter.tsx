import classes from "../HeroFilter.module.scss";
import FilterStar from "./StarItem/FilterStar";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectAdultsFilter, selectStarsFilter} from "../../../../../modules/hotelFilters/hotelFiltersSelectors";
import hotelFiltersSlice from "../../../../../modules/hotelFilters/hotelFiltersSlice";
import {setRefreshAnim} from "../../../../../UI/Spinner/refreshFiltersAnim";

type starOptions = {
    borderColor: string;
    fillColor: string;
};

type starWidgetState = {
    starArray: starOptions[];
};

const generateStarState = (
    starAmount: number,
    filledStarsAmount: number,
    starActiveColor: starOptions,
    starInactiveColor: starOptions

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

type Props = Readonly<{starColor1:string, starColor2:string, maxHotelRateStarAmount: number }>
const StarFilter = ({starColor1, starColor2, maxHotelRateStarAmount} :Props) => {
    const currentStarAmount = useSelector(selectStarsFilter);
    const starActiveColor: starOptions = {
        borderColor: starColor1,
        fillColor: starColor1,
    };
    const starInactiveColor: starOptions = {
        borderColor: starColor1,
        fillColor: starColor2,
    };
    const initStarState: starWidgetState = generateStarState(
        maxHotelRateStarAmount,
        currentStarAmount,
        starActiveColor,
        starInactiveColor
    );
    const [starState, setStarState] = useState(initStarState);
    const dispatch = useDispatch();


    const onClickHandlerStar = (starIndex: number): void => {
        dispatch(hotelFiltersSlice.actions.setStarsFilter(starIndex+1));
        setStarState(generateStarState(
            maxHotelRateStarAmount,
            starIndex+1,
            starActiveColor,
            starInactiveColor,
        ))
        setRefreshAnim(dispatch);
    };

  return  <div className={classes.stars}>
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
  </div>;
};
export default StarFilter;
