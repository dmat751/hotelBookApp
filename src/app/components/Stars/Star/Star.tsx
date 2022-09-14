import classes from './Star.module.scss';

type Props = Readonly<{
  borderColor: string;
  fillColor: string;
  onClickHandler?: () => void;
}>;

export const Star = ({ borderColor, fillColor, onClickHandler }: Props) => (
  <div onClick={onClickHandler}>
    <svg
      className={`${classes.svg} ${onClickHandler && classes['svg--pointer']}`}
      viewBox="0 0 300 275"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <polygon
        fill={fillColor}
        stroke={borderColor}
        strokeWidth="15"
        points="150,25  179,111 269,111 197,165
                    223,251  150,200 77,251  103,165
                    31,111 121,111"
      />
    </svg>
  </div>
);