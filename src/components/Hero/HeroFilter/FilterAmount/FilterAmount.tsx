import classes from './FilterAmount.module.scss';

const FilterFilter: React.FC<{
  currentFilterAmount: number;
  onIncreaseFilterHandler: any;
  onDecreaseFilterHandler: any;
  filterLabel: string;
  isPlusButtonDisabled: boolean;
  isMinusButtonDisabled: boolean;
}> = (props) => {
  return (
    <div className={classes.filter}>
      <p className={classes['filter__label']}>{props.filterLabel}</p>
      <button
        disabled={props.isPlusButtonDisabled}
        onClick={props.onIncreaseFilterHandler}
        className={`${classes['filter__button']} ${classes['filter__plus-button']}`}
      >
        <span>+</span>
      </button>
      <div className={classes['filter__counter']}>
        {props.currentFilterAmount}
      </div>
      <button
        disabled={props.isMinusButtonDisabled}
        onClick={props.onDecreaseFilterHandler}
        className={`${classes['filter__button']} ${classes['filter__minus-button']}`}
      >
        <span>_</span>
      </button>
    </div>
  );
};
export default FilterFilter;
