import classes from './HotelInfo.module.scss';
const HotelInfo: React.FC<{
  hotelName: string;
  hotelAddress1: string;
  hotelAddress2: string;
}> = (props) => {
  return (
    <div className={classes.info}>
      <h2>{props.hotelName}</h2>
      <h3>{props.hotelAddress1}</h3>
      {props.hotelAddress2 && <h4>{props.hotelAddress2}</h4>}
    </div>
  );
};
export default HotelInfo;
