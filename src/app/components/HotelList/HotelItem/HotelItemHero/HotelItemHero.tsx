import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectMaxHotelStars } from '../../../../../modules/hotelList/selectors/selectMaxHotelStars';
import { Hotel } from '../../../../../modules/hotelList/types/hotel';
import { Stars } from '../../../Stars/Stars';
import { HotelInfo } from './HotelInfo/HotelInfo';
import { Slider } from './Slider/Slider';

type Props = Readonly<{ hotelItem: Hotel }>;
export const HotelItemHero = ({
  hotelItem: { images, name, address1, address2, starRating },
}: Props) => {
  const hotelMaxStars = useSelector(selectMaxHotelStars);
  const hotelItemHeroClassNames = classNames(
    'flex md:justify-between md:flex-row md:items-start flex-col items-center'
  );

  return (
    <div className={hotelItemHeroClassNames}>
      <Slider images={images} />
      <HotelInfo
        hotelName={name}
        hotelAddress1={address1}
        hotelAddress2={address2}
      />
      <Stars
        borderColor="#fff500"
        fillColor="#fff500"
        numberOfSelectedStarts={starRating}
        numberOfStars={hotelMaxStars}
      />
    </div>
  );
};
