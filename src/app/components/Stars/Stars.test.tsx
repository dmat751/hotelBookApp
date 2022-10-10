import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { Stars } from './Stars';

const TestStarComponent = () => {
  const [selectedStars, setSelectedStars] = useState(3);

  const onStarClickHandler = (starIndex: number) => {
    setSelectedStars(starIndex + 1);
  };

  return (
    <Stars
      borderColor="black"
      fillColor="red"
      numberOfSelectedStarts={selectedStars}
      numberOfStars={5}
      onFilterChange={onStarClickHandler}
    />
  );
};

describe('test Stars component', () => {
  test('fill correct clicked stars', () => {
    render(<TestStarComponent />);

    let filledStars = screen.getAllByTestId('star-polygon-red');
    expect(filledStars.length).toBe(3);

    let renderedStars = screen.getAllByTestId('star-rendered');
    expect(renderedStars.length).toBe(5);

    renderedStars[3].click();
    filledStars = screen.getAllByTestId('star-polygon-red');
    expect(filledStars.length).toBe(4);

    renderedStars = screen.getAllByTestId('star-rendered');
    renderedStars[0].click();
    filledStars = screen.getAllByTestId('star-polygon-red');
    expect(filledStars.length).toBe(1);
  });
});
