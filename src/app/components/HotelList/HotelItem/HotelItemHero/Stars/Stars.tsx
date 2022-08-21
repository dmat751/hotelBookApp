import { Star } from './Star';
import classes from './Stars.module.scss';
import nextId from 'react-id-generator';
import { useStarsStateBuilder } from '../../../../../hooks/useStarsStateBuilder';

type Props = Readonly<{
  starAmount: number;
  starColor1: string;
  starColor2: string;
  maxHotelRateStarAmount: number;
}>;

export const Stars = ({
  starAmount,
  maxHotelRateStarAmount,
  starColor1,
  starColor2,
}: Props) => {
  const starsStatus = useStarsStateBuilder({
    activeStarAmount: starAmount,
    maxStarAmount: maxHotelRateStarAmount,
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
