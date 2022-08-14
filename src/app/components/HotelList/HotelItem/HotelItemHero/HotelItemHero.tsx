import { Hotel } from '../../../../types/hotel';
import { HotelInfo } from './HotelInfo/HotelInfo';
import classes from './HotelItemHero.module.scss';
import { Slider } from './Slider/Slider';
import { Stars } from './Stars/Stars';

type Props = Readonly<{ hotelItem: Hotel }>;
export const HotelItemHero = ({ hotelItem }: Props) => {
  return (
    <div className={classes.hero}>
      <Slider images={hotelItem.images} />
      <HotelInfo
        hotelName={hotelItem.name}
        hotelAddress1={hotelItem.address1}
        hotelAddress2={hotelItem.address2}
      />
      <Stars starAmount={hotelItem.starRating} />
    </div>
  );
};
