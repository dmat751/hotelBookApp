import Star from './Star';
import classes from './Stars.module.scss';

interface starOptions {
  borderColor: string;
  fillColor: string;
}

const starActiveColor: starOptions = {
  borderColor: 'yellow',
  fillColor: 'yellow',
};

const starInactiveColor: starOptions = {
  borderColor: 'yellow',
  fillColor: 'transparent',
};

const starsStateBuilder = (
  activeStarsAmount: number,
  maxStarsAmount: number
): starOptions[] => {
  let starsState: starOptions[] = [];
  for (let i = 1; i <= maxStarsAmount; i++) {
    if (i <= activeStarsAmount) {
      starsState.push(starActiveColor);
    } else {
      starsState.push(starInactiveColor);
    }
  }
  return starsState;
};

const Stars: React.FC<{ starAmount: number }> = (props) => {
  return (
    <div className={classes.stars}>
      {starsStateBuilder(props.starAmount, 5).map((item, index) => {
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
