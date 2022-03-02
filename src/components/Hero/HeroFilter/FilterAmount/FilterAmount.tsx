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
        <svg
          enable-background="new 0 0 50 50"
          height="50px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 50 50"
          width="50px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="none" height="50" width="50" />
          <line
            fill="none"
            stroke="#000000"
            stroke-miterlimit="10"
            stroke-width="4"
            x1="9"
            x2="41"
            y1="25"
            y2="25"
          />
          <line
            fill="none"
            stroke="#000000"
            stroke-miterlimit="10"
            stroke-width="4"
            x1="25"
            x2="25"
            y1="9"
            y2="41"
          />
        </svg>
      </button>
      <div className={classes['filter__counter']}>
        {props.currentFilterAmount}
      </div>
      <button
        onClick={props.onDecreaseFilterHandler}
        className={`${classes['filter__button']} ${classes['filter__minus-button']}`}
      >
        <svg viewBox="0 0 612 612">
          <g>
            <g id="minus">
              <g>
                <path
                  d="M554.625,248.625H57.375C25.685,248.625,0,274.31,0,306c0,31.69,25.685,57.375,57.375,57.375h497.25
				C586.315,363.375,612,337.69,612,306C612,274.31,586.315,248.625,554.625,248.625z"
                />
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
};
export default FilterFilter;
