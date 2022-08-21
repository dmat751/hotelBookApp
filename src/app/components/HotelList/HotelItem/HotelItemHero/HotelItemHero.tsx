import { useSelector } from 'react-redux';
import { selectMaxHotelStars } from '../../../../../modules/hotelList/maxHotelStarsSelector';
import { Hotel } from '../../../../types/hotel';
import { HotelInfo } from './HotelInfo/HotelInfo';
import classes from './HotelItemHero.module.scss';
import { Slider } from './Slider/Slider';
import { Stars } from './Stars/Stars';

type Props = Readonly<{ hotelItem: Hotel }>;
export const HotelItemHero = ({
  hotelItem: { images, name, address1, address2, starRating },
}: Props) => {
  const hotelMaxStars = useSelector(selectMaxHotelStars);

  return (
    <div className={classes.hero}>
      <Slider images={images} />
      <HotelInfo
        hotelName={name}
        hotelAddress1={address1}
        hotelAddress2={address2}
      />
      <Stars
        starAmount={starRating}
        starColor1="#fff500"
        starColor2="transparent"
        maxHotelRateStarAmount={hotelMaxStars}
      />
    </div>
  );
};
