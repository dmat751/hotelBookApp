import classes from './Stars.module.scss';
import nextId from 'react-id-generator';
import { Star } from './Star/Star';
import { StarOptions } from '../../types/star';

type Props = Readonly<{
  numberOfStars: number;
  numberOfSelectedStarts: number;
  borderColor: string;
  fillColor: string;
  onFilterChange?: (value: number) => void;
}>;

export const Stars = ({
  numberOfStars,
  numberOfSelectedStarts,
  borderColor,
  fillColor,
  onFilterChange,
}: Props) => {
  const starsState: StarOptions[] = [];
  for (let i = 1; i <= numberOfStars; i++) {
    i <= numberOfSelectedStarts
      ? starsState.push({ borderColor, fillColor })
      : starsState.push({ borderColor, fillColor: 'transparent' });
  }

  return (
    <div className={classes.stars}>
      {starsState.map((item, index) => (
        <Star
          key={nextId()}
          borderColor={item.borderColor}
          fillColor={item.fillColor}
          onClickHandler={
            onFilterChange ? () => onFilterChange(index) : undefined
          }
        />
      ))}
    </div>
  );
};
