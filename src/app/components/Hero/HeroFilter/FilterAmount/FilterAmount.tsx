import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';

type Props = Readonly<{
  currentFilterAmount: number;
  onIncreaseFilterHandler: () => void;
  onDecreaseFilterHandler: () => void;
  filterLabel: string;
  isPlusButtonDisabled: boolean;
  dataTestIdPrefix: string;
}>;

export const FilterAmount = ({
  currentFilterAmount,
  onIncreaseFilterHandler,
  onDecreaseFilterHandler,
  filterLabel,
  isPlusButtonDisabled,
  dataTestIdPrefix,
}: Props) => {
  const filterButtonClassNames = classNames(
    'p-1 rounded-full bg-blue-300 mx-1 disabled:cursor-not-allowed disabled:bg-gray-400'
  );

  return (
    <div className="flex items-center md:my-0 md:mx-4 mt-0 mr-4 mb-2.5 ml-auto">
      <label className="text-lg">{filterLabel}</label>
      <button
        data-testid={`${dataTestIdPrefix}-plus-btn`}
        disabled={isPlusButtonDisabled}
        onClick={onIncreaseFilterHandler}
        className={filterButtonClassNames}
      >
        <PlusSmallIcon width={20} />
      </button>
      <span
        data-testid={`${dataTestIdPrefix}-current-filter-amount`}
        className="mx-1.5"
      >
        {currentFilterAmount}
      </span>
      <button
        data-testid={`${dataTestIdPrefix}-minus-btn`}
        disabled={currentFilterAmount === 0}
        onClick={onDecreaseFilterHandler}
        className={filterButtonClassNames}
      >
        <MinusSmallIcon width={20} />
      </button>
    </div>
  );
};
