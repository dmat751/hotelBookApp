import { render, screen } from '@testing-library/react';
import { useCallback, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { FilterAmount } from '../FilterAmount';
import '@testing-library/jest-dom';

const dataTestIdPrefix = 'test-filter';

const TestFilter = () => {
  const [currentFilterAmount, setCurrentFilterAmount] = useState(1);
  const maxFilterValue = 2;

  const handleOnIncrease = useCallback(() => {
    setCurrentFilterAmount((prev) => prev + 1);
  }, []);

  const handleOnDecrease = useCallback(() => {
    setCurrentFilterAmount((prev) => prev - 1);
  }, []);

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
    //given
    render(<TestFilter />);

    const filterLabel = screen.getByText('TestFilter');
    const currentFilterValue = screen.getByTestId(
      `${dataTestIdPrefix}-current-filter-amount`
    );
    const buttonPlus = screen.getByTestId(`${dataTestIdPrefix}-plus-btn`);
    const buttonMinus = screen.getByTestId(`${dataTestIdPrefix}-minus-btn`);

    //when
    //then
    expect(filterLabel).toBeInTheDocument();
    expect(currentFilterValue.textContent).toBe('1');
    expect(buttonPlus).not.toBeDisabled();
    expect(buttonMinus).not.toBeDisabled();
    act(() => {
      buttonMinus.click();
    });
    expect(buttonMinus).toBeDisabled();

    act(() => {
      buttonPlus.click();
    });
    expect(currentFilterValue.textContent).toBe('1');

    act(() => {
      buttonPlus.click();
    });
    expect(buttonPlus).toBeDisabled();
    expect(currentFilterValue.textContent).toBe('2');
  });
});
