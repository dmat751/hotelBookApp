import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/solid';

type Props = Readonly<{
  currentFilterAmount: number;
  onIncreaseFilterHandler: () => void;
  onDecreaseFilterHandler: () => void;
  filterLabel: string;
  isPlusButtonDisabled: boolean;
}>;

export const FilterAmount = ({
  currentFilterAmount,
  onIncreaseFilterHandler,
  onDecreaseFilterHandler,
  filterLabel,
  isPlusButtonDisabled,
}: Props) => (
  <div className="flex items-center md:my-0 md:mx-4 mt-0 mr-4 mb-2.5 ml-auto">
    <label className="text-lg">{filterLabel}</label>
    <button
      disabled={isPlusButtonDisabled}
      onClick={onIncreaseFilterHandler}
      className="p-1 rounded-full bg-blue-300 mx-1 disabled:cursor-not-allowed disabled:bg-gray-400"
    >
      <PlusSmallIcon width={20} />
    </button>
    <div className="mx-1.5">{currentFilterAmount}</div>
    <button
      disabled={currentFilterAmount === 0}
      onClick={onDecreaseFilterHandler}
      className="p-1 rounded-full bg-blue-300 mx-1 disabled:cursor-not-allowed disabled:bg-gray-400"
    >
      <MinusSmallIcon width={20} />
    </button>
  </div>
);
