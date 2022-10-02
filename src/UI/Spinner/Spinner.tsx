import classes from './Spinner.module.scss';

export const Spinner = (
  <div className={classes['multi-spinner-container']}>
    <div className={classes['multi-spinner']}>
      <div className={classes['multi-spinner']}>
        <div className={classes['multi-spinner']}>
          <div className={classes['multi-spinner']}>
            <div className={classes['multi-spinner']}>
              <div className={classes['multi-spinner']}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
