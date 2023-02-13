import { HotelItem } from '../HotelItem/HotelItem';
import baseClasses from '../../../app/assets/baseClasses.module.scss';
import { selectFilteredHotelList } from '../../../modules/hotelList/selectors/selectFilteredHotelList';
import { useAppSelector } from '../../../app/store/hooks';

export const HotelListContent = () => {
  const hotelListItems = useAppSelector(selectFilteredHotelList);

  return (
    <ul className={baseClasses['basic-container-1']}>
      {hotelListItems.map((hotelItem) => (
        <HotelItem hotelItem={hotelItem} key={hotelItem.id} />
      ))}
    </ul>
  );
};
