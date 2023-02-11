import { Star } from './Star/Star';
import { StarOptions } from '../../app/types/star';
import { memo } from 'react';

type Props = Readonly<{
  numberOfStars: number;
  numberOfSelectedStarts: number;
  borderColor: string;
  fillColor: string;
  onFilterChange?: (value: number) => void;
}>;

export const Stars = memo(
  ({
    numberOfStars,
    numberOfSelectedStarts,
    borderColor,
    fillColor,
    onFilterChange,
  }: Props) => {
    const starsState: StarOptions[] = [];
    for (let i = 1; i <= numberOfStars; i++) {
      i <= numberOfSelectedStarts
        ? starsState.push({ borderColor, fillColor, id: i + '' })
        : starsState.push({
            borderColor,
            fillColor: 'transparent',
            id: i + '',
          });
    }

    return (
      <div className="flex order-1  mb-3 md:mb-0">
        {starsState.map((item, index) => (
          <Star
            key={item.id}
            borderColor={item.borderColor}
            fillColor={item.fillColor}
            onClickHandler={
              onFilterChange ? () => onFilterChange(index) : undefined
            }
          />
        ))}
      </div>
    );
  }
);
