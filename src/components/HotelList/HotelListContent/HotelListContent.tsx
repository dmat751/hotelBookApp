import { HotelItem } from '../HotelItem/HotelItem';
import baseClasses from '../../../app/assets/baseClasses.module.scss';
import { selectFilteredHotels } from '../../../modules/hotelList/selectors/selectFilteredHotelList';
import { useAppSelector } from '../../../app/store/hooks';

export const HotelListContent = () => {
  const hotelListItems = useAppSelector(selectFilteredHotels);

  return (
    <ul className={baseClasses['basic-container-1']}>
      {hotelListItems.map((hotelItem) => (
        <HotelItem hotelItem={hotelItem} key={hotelItem.id} />
      ))}
    </ul>
  );
};
