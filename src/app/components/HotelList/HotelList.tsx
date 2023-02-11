import { useSelector } from 'react-redux';
import { spinner } from '../../../UI/Spinner/Spinner';
import { Notification } from '../../../UI/Notification/Notification';
import { HotelListContent } from './HotelListContent/HotelListContent';
import { useGetHotelListQuery } from '../../../modules/hotelList/api/hotelList';
import { selectFilteredHotelListApi } from '../../../modules/hotelList/selectors/selectAllHotelList';

export const HotelList = () => {
  const hotelListLength = useSelector(selectFilteredHotelListApi).length;
  const { isLoading, isError } = useGetHotelListQuery();

  const isContentVisible = !isLoading && !isError;
  const isHotelsNoFoundNotificationVisible =
    hotelListLength === 0 && !isLoading;

  return (
    <div className="flex flex-col items-center">
      {isContentVisible && <HotelListContent />}
      {isLoading && spinner}
      {isError && (
        <Notification message="Sorry, can't fetch data" msgType="error" />
      )}
      {isHotelsNoFoundNotificationVisible && (
        <Notification message="We can not find any hotels" msgType="info" />
      )}
    </div>
  );
};
