import classes from './FilterAmount.module.scss';

const FilterFilter: React.FC<{
  currentFilterAmount: number;
  onIncreaseFilterHandler: any;
  onDecreaseFilterHandler: any;
  filterLabel: string;
}> = (props) => {
  return (
    <div className={classes.filter}>
      <p className={classes['filter__label']}>{props.filterLabel}</p>
      <button
        onClick={props.onIncreaseFilterHandler}
        className={`${classes['filter__button']} ${classes['filter__plus-button']}`}
      >
        <span>+</span>
      </button>
      <div className={classes['filter__counter']}>
        {props.currentFilterAmount}
      </div>
      <button
        onClick={props.onDecreaseFilterHandler}
        className={`${classes['filter__button']} ${classes['filter__minus-button']}`}
      >
        <span>-</span>
      </button>
    </div>
  );
};
export default FilterFilter;
