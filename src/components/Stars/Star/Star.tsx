import classNames from 'classnames';

type Props = Readonly<{
  borderColor: string;
  fillColor: string;
  starDataTestId: string;
  onClickHandler?: () => void;
}>;

export const Star = ({
  borderColor,
  fillColor,
  starDataTestId,
  onClickHandler,
}: Props) => (
  <div onClick={onClickHandler} data-testid={starDataTestId}>
    <svg
      className={classNames('m-[2px] h-[30px] w-[30px]', {
        'cursor-pointer': onClickHandler,
      })}
      viewBox="0 0 300 275"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <polygon
        data-testid={`star-polygon-${fillColor}`}
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
