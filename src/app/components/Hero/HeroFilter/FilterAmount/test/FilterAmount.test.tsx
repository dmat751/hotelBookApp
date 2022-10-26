import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { FilterAmount } from '../FilterAmount';

const dataTestIdPrefix = 'test-filter';

const TestFilter = () => {
  const [currentFilterAmount, setCurrentFilterAmount] = useState(1);
  const maxFilterValue = 2;

  const handleOnIncrease = () => {
    setCurrentFilterAmount((prev) => prev + 1);
  };

  const handleOnDecrease = () => {
    setCurrentFilterAmount((prev) => prev - 1);
  };

  return (
    <FilterAmount
      currentFilterAmount={currentFilterAmount}
      filterLabel="TestFilter"
      isPlusButtonDisabled={currentFilterAmount >= maxFilterValue}
      onDecreaseFilterHandler={handleOnDecrease}
      onIncreaseFilterHandler={handleOnIncrease}
      dataTestIdPrefix={dataTestIdPrefix}
    />
  );
};

describe('test FilterAmount component', () => {
  test('plus/minus filter amount', () => {
    render(<TestFilter />);

    const filterLabel = screen.getByText('TestFilter');
    const currentFilterValue = screen.getByTestId(
      `${dataTestIdPrefix}-current-filter-amount`
    );
    const buttonPlus = screen.getByTestId(`${dataTestIdPrefix}-plus-btn`);
    const buttonMinus = screen.getByTestId(`${dataTestIdPrefix}-minus-btn`);

    expect(filterLabel).toBeInTheDocument();
    expect(currentFilterValue.textContent).toBe('1');
    expect(buttonPlus).not.toBeDisabled();
    expect(buttonMinus).not.toBeDisabled();

    buttonMinus.click();
    expect(buttonMinus).toBeDisabled();

    buttonPlus.click();
    expect(currentFilterValue.textContent).toBe('1');

    buttonPlus.click();
    expect(buttonPlus).toBeDisabled();
    expect(currentFilterValue.textContent).toBe('2');
  });
});
