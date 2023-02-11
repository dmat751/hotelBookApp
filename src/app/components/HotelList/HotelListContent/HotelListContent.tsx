import { useSelector } from 'react-redux';
import { HotelItem } from '../HotelItem/HotelItem';
import baseClasses from '../../../assets/baseClasses.module.scss';
import { selectFilteredHotelList } from '../../../../modules/hotelList/selectors/selectFilteredHotelList';

export const HotelListContent = () => {
  // const hotelListItems = useSelector(selectFilteredHotelList);
  const hotelListItems = useSelector(selectFilteredHotelList);
  // console.log(hotelListItems2);

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
