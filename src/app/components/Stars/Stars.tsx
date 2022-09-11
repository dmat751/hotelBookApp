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
    <div className="flex order-1 md:order-[-1] mb-3 md:mb-0">
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
