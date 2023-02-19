import { useAppSelector } from '@/app/store/hooks';
import { Stars } from '@/components/Stars/Stars';
import { HotelInfo } from '@/modules/Hotels/components/Hotels/HotelItem/HotelHero/HotelInfo/HotelInfo';
import { Slider } from '@/modules/Hotels/components/Hotels/HotelItem/HotelHero/Slider/Slider';
import { selectMaxHotelStars } from '@/modules/Hotels/selectors';
import { Hotel } from '@/modules/Hotels/types/Hotel';
import classNames from 'classnames';

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
