import classes from './FilterChildren.module.scss';

const FilterChildren: React.FC<{ dummyVar: string }> = (props) => {
  return (
    <div className={classes.filter}>
      <p className={classes['filter__label']}>Children</p>
      <button
        className={`${classes['filter__button']} ${classes['filter__plus-button']}`}
      >
        <span>+</span>
      </button>
      <div className={classes['filter__counter']}>4</div>
      <button
        className={`${classes['filter__button']} ${classes['filter__minus-button']}`}
      >
        <span>-</span>
      </button>
    </div>
  );
};
export default FilterChildren;
