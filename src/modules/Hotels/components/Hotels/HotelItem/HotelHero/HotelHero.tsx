import classNames from 'classnames';
import { useAppSelector } from '../../../../../../app/store/hooks';
import type { Hotel } from '../../../../types/Hotel';
import { Stars } from '../../../../../../components/Stars/Stars';
import { HotelInfo } from './HotelInfo/HotelInfo';
import { Slider } from './Slider/Slider';
import { selectMaxHotelStars } from '../../../../Selectors';

type Props = Readonly<{ hotelItem: Hotel }>;

export const HotelHero = ({
  hotelItem: { images, name, address1, address2, starRating },
}: Props) => {
  const hotelMaxStars = useAppSelector(selectMaxHotelStars);
  const hotelItemHeroClassNames = classNames(
    'flex md:justify-between md:flex-row md:items-start flex-col items-center'
  );

  return (
    <div className={hotelItemHeroClassNames}>
      <Slider images={images} />
      <HotelInfo name={name} address1={address1} address2={address2} />
      <Stars
        borderColor="#fff500"
        fillColor="#fff500"
        numberOfSelectedStars={starRating}
        numberOfStars={hotelMaxStars}
      />
    </div>
  );
};