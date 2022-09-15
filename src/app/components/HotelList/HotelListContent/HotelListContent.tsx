import { useSelector } from 'react-redux';
import { selectFilteredHotelList } from '../../../../modules/hotelList/filteredHotelListSelector';
import { HotelItem } from '../HotelItem/HotelItem';
import baseClasses from '../../../assets/baseClasses.module.scss';

export const HotelListContent = () => {
  const hotelListItems = useSelector(selectFilteredHotelList);

  return (
    <ul className={baseClasses['basic-container-1']}>
      {hotelListItems.map((hotelItem) => (
        <li className="mb-[50px]" key={hotelItem.id}>
          <HotelItem hotelItem={hotelItem} />
        </li>
      ))}
    </ul>
  );
};
