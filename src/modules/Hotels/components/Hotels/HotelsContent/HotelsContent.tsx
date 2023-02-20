import { HotelItem } from '../HotelItem/HotelItem';
import baseClasses from '../../../../../app/assets/baseClasses.module.scss';
import { useAppSelector } from '../../../../../app/store/hooks';
import { selectFilteredHotels } from '../../../selectors';

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
