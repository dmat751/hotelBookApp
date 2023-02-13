import { Star } from './Star/Star';
import type { StarOptions } from '../../app/types/StarOptions';
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
    const starsState: StarOptions[] = Array.from(
      { length: numberOfStars },
      (_, i) => ({
        borderColor,
        fillColor: i < numberOfSelectedStarts ? fillColor : 'transparent',
        id: `${i + 1}`,
      })
    );

    return (
      <div className="flex order-1  mb-3 md:mb-0">
        {starsState.map(({ id, borderColor, fillColor }, index) => (
          <Star
            key={id}
            borderColor={borderColor}
            fillColor={fillColor}
            onClickHandler={
              onFilterChange ? () => onFilterChange(index) : undefined
            }
            dataTestId={`star-rendered-${index}`}
          />
        ))}
      </div>
    );
  }
);
