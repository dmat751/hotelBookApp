import { HotelItem } from '@/modules/Hotels/components/Hotels/HotelItem/HotelItem';
import { selectFilteredHotels } from '@/modules/Hotels/selectors';
import { useAppSelector } from '@store/hooks';
import baseClasses from '@/app/assets/baseClasses.module.scss';

export const HotelsContent = () => {
  const filteredHotels = useAppSelector(selectFilteredHotels);

  return (
    <ul className={baseClasses['basic-container-1']}>
      {filteredHotels.map((hotelItem) => (
        <HotelItem hotelItem={hotelItem} key={hotelItem.id} />
      ))}
    </ul>
  );
};
