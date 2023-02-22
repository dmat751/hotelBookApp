import { Button } from '@/modules/HotelFilters/components/Hero/HeroFilter/FilterAmount/Button/Button';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/solid';
import { memo } from 'react';

type Props = Readonly<{
  currentFilterAmount: number;
  dataTestIdPrefix: string;
  filterLabel: string;
  isPlusButtonDisabled: boolean;
  onDecrease: () => void;
  onIncrease: () => void;
}>;

export const FilterAmount = memo(
  ({
    currentFilterAmount,
    dataTestIdPrefix,
    filterLabel,
    isPlusButtonDisabled,
    onDecrease,
    onIncrease,
  }: Props) => (
    <div className="flex items-center md:my-0 md:mx-4 mt-0 mr-4 mb-2.5 ml-auto">
      <label className="text-lg">{filterLabel}</label>
      <Button
        dataTestId={`${dataTestIdPrefix}-plus-btn`}
        disabled={isPlusButtonDisabled}
        onClick={onIncrease}
      >
        <PlusSmallIcon width={20} />
      </Button>
      <span
        data-testid={`${dataTestIdPrefix}-current-filter-amount`}
        className="mx-1.5"
      >
        {currentFilterAmount}
      </span>
      <Button
        dataTestId={`${dataTestIdPrefix}-minus-btn`}
        disabled={currentFilterAmount === 0}
        onClick={onDecrease}
      >
        <MinusSmallIcon width={20} />
      </Button>
    </div>
  )
);
