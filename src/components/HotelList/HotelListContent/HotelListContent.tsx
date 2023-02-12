import { useSelector } from 'react-redux';
import { HotelItem } from '../HotelItem/HotelItem';
import baseClasses from '../../../app/assets/baseClasses.module.scss';
import { selectFilteredHotelList } from '../../../modules/hotelList/selectors/selectFilteredHotelList';

export const HotelListContent = () => {
  const hotelListItems = useSelector(selectFilteredHotelList);

  return (
    <ul className={baseClasses['basic-container-1']}>
      {hotelListItems.map((hotelItem) => (
        <HotelItem hotelItem={hotelItem} />
      ))}
    </ul>
  );
};
