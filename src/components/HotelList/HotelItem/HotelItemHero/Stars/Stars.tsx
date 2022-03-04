import Star from './Star';
import classes from './Stars.module.scss';

const starColor1 = '#fff500';
const starColor2 = 'transparent';
const hotelMaxStars = 5;

interface starOptions {
  borderColor: string;
  fillColor: string;
}

const starActiveColor: starOptions = {
  borderColor: starColor1,
  fillColor: starColor1,
};

const starInactiveColor: starOptions = {
  borderColor: starColor1,
  fillColor: starColor2,
};

const starsStateBuilder = (
  activeStarsAmount: number,
  maxStarsAmount: number
): starOptions[] => {
  let starsState: starOptions[] = [];
  for (let i = 1; i <= maxStarsAmount; i++) {
    i <= activeStarsAmount
      ? starsState.push(starActiveColor)
      : starsState.push(starInactiveColor);
  }
  return starsState;
};

const Stars: React.FC<{ starAmount: number }> = (props) => {
  return (
    <div className={classes.stars}>
      {starsStateBuilder(props.starAmount, hotelMaxStars).map((item, index) => {
        return (
          <Star
            key={index}
            borderColor={item.borderColor}
            fillColor={item.fillColor}
          />
        );
      })}
    </div>
  );
};
export default Stars;
