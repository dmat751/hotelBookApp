import classes from './FilterAmount.module.scss';

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
  <div className={classes.filter}>
    <span className={classes['filter__label']}>{filterLabel}</span>
    <button
      disabled={isPlusButtonDisabled}
      onClick={onIncreaseFilterHandler}
      className={`${classes['filter__button']} ${classes['filter__plus-button']}`}
    >
      <span>+</span>
    </button>
    <div className={classes['filter__counter']}>{currentFilterAmount}</div>
    <button
      disabled={currentFilterAmount === 0}
      onClick={onDecreaseFilterHandler}
      className={`${classes['filter__button']} ${classes['filter__minus-button']}`}
    >
      <span>_</span>
    </button>
  </div>
);
