import { Hotel } from '../../../../models/hotel';
import HotelInfo from './HotelInfo/HotelInfo';
import classes from './HotelItemHero.module.scss';
import Slider from './Slider/Slider';
import Stars from './Stars/Stars';
const HotelItemHero: React.FC<{ hotelItem: Hotel }> = (props) => {
  return (
    <div className={classes.hero}>
      <Slider images={props.hotelItem.images} />
      <HotelInfo
        hotelName={props.hotelItem.name}
        hotelAddress1={props.hotelItem.address1}
        hotelAddress2={props.hotelItem.address2}
      />
      <Stars starAmount={props.hotelItem.starRating} />
    </div>
  );
};
export default HotelItemHero;
