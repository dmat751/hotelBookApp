import { Star } from './Star';
import classes from './Stars.module.scss';
import nextId from 'react-id-generator';
import { useStarsStateBuilder } from '../../../../../hooks/useStarsStateBuilder';

const starColor1 = '#fff500';
const starColor2 = 'transparent';
const hotelMaxStars = 5;

type Props = Readonly<{ starAmount: number }>;
export const Stars = ({ starAmount }: Props) => {
  const starsStatus = useStarsStateBuilder({
    activeStarAmount: starAmount,
    maxStarAmount: hotelMaxStars,
    starColor1,
    starColor2,
  });
  return (
    <div className={classes.stars}>
      {starsStatus.map((item) => (
        <Star
          key={nextId()}
          borderColor={item.borderColor}
          fillColor={item.fillColor}
        />
      ))}
    </div>
  );
};
