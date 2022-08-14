import { type } from '@testing-library/user-event/dist/type';
import classes from './HotelInfo.module.scss';
type Props = Readonly<{
  hotelName: string;
  hotelAddress1: string;
  hotelAddress2: string;
}>;
export const HotelInfo = ({
  hotelAddress1,
  hotelAddress2,
  hotelName,
}: Props) => {
  return (
    <div className={classes.info}>
      <h2>{hotelName}</h2>
      <h3>{hotelAddress1}</h3>
      {hotelAddress2 && <h4>{hotelAddress2}</h4>}
    </div>
  );
};
