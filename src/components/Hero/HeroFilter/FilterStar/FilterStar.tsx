import React from 'react';
import classes from './FIlterStar.module.scss';

const FilterStar: React.FC<{
  borderColor: string;
  fillColor: string;
  clickedStarID: number;
  onClickHandler: any;
}> = (props) => {
  return (
    <div onClick={props.onClickHandler} className={classes['svg-item']}>
      <svg
        className={classes.svg}
        viewBox="0 0 300 275"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <polygon
          fill={props.fillColor}
          stroke={props.borderColor}
          strokeWidth="15"
          points="150,25  179,111 269,111 197,165
                    223,251  150,200 77,251  103,165
                    31,111 121,111"
        />
      </svg>
    </div>
  );
};
export default FilterStar;
