import { Star } from './Star/Star';
import { memo, useMemo } from 'react';

type Props = Readonly<{
  borderColor: string;
  fillColor: string;
  numberOfSelectedStars: number;
  numberOfStars: number;
  onChange?: (value: number) => void;
}>;

export const Stars = memo(
  ({
    borderColor,
    fillColor,
    numberOfSelectedStars,
    numberOfStars,
    onChange: onFilterChange,
  }: Props) => {
    const starsState = useMemo(
      () =>
        Array.from({ length: numberOfStars }, (_, i) => ({
          borderColor,
          fillColor: i < numberOfSelectedStars ? fillColor : 'transparent',
          id: `${i + 1}`,
        })),
      [borderColor, fillColor, numberOfSelectedStars, numberOfStars]
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
