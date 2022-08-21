import { StarOptions } from '../../../../../types/star';
import { Star } from './Star';
import classes from './Stars.module.scss';
import nextId from 'react-id-generator';

const starColor1 = '#fff500';
const starColor2 = 'transparent';
const hotelMaxStars = 5;

const starActiveColor: StarOptions = {
  borderColor: starColor1,
  fillColor: starColor1,
};

const starInactiveColor: StarOptions = {
  borderColor: starColor1,
  fillColor: starColor2,
};

const starsStateBuilder = (
  activeStarsAmount: number,
  maxStarsAmount: number
): StarOptions[] => {
  let starsState: StarOptions[] = [];
  for (let i = 1; i <= maxStarsAmount; i++) {
    i <= activeStarsAmount
      ? starsState.push(starActiveColor)
      : starsState.push(starInactiveColor);
  }
  return starsState;
};

type Props = Readonly<{ starAmount: number }>;
export const Stars = ({ starAmount }: Props) => (
  <div className={classes.stars}>
    {starsStateBuilder(starAmount, hotelMaxStars).map((item) => (
      <Star
        key={nextId()}
        borderColor={item.borderColor}
        fillColor={item.fillColor}
      />
    ))}
  </div>
);
