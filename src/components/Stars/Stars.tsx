import { Star } from './Star/Star';
import { StarOptions } from '../../app/types/StarOptions';
import { memo } from 'react';

type Props = Readonly<{
  borderColor: string;
  fillColor: string;
  numberOfSelectedStarts: number;
  numberOfStars: number;
  onFilterChange?: (value: number) => void;
}>;

export const Stars = memo(
  ({
    borderColor,
    fillColor,
    numberOfSelectedStarts,
    numberOfStars,
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
            starDataTestId={`star-rendered-${index}`}
          />
        ))}
      </div>
    );
  }
);
