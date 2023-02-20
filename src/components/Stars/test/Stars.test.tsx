import { Stars } from '@/components/Stars/Stars';
import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { act } from 'react-dom/test-utils';

const TestStarComponent = () => {
  const [selectedStars, setSelectedStars] = useState(3);

  const handleClick = (starIndex: number) => {
    setSelectedStars(starIndex + 1);
  };

  return (
    <Stars
      borderColor="black"
      fillColor="red"
      numberOfSelectedStars={selectedStars}
      numberOfStars={5}
      onClick={handleClick}
    />
  );
};

describe('test Stars component', () => {
  test('amount of clicked stars should be correct filled', () => {
    //given
    render(<TestStarComponent />);

    //when
    //then
    let filledStars = screen.getAllByTestId('star-polygon-red');
    expect(filledStars.length).toBe(3);

    let renderedStars = screen.getAllByTestId(/star-rendered-[0-9]+/i);
    expect(renderedStars.length).toBe(5);

    act(() => {
      renderedStars[3].click();
    });
    filledStars = screen.getAllByTestId('star-polygon-red');
    expect(filledStars.length).toBe(4);

    renderedStars = screen.getAllByTestId(/star-rendered-[0-9]+/i);
    act(() => {
      renderedStars[0].click();
    });

    filledStars = screen.getAllByTestId('star-polygon-red');
    expect(filledStars.length).toBe(1);
  });
});
