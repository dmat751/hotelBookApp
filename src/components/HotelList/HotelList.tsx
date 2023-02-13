import { Notification } from '../Notification/Notification';
import { HotelListContent } from './HotelListContent/HotelListContent';
import { useGetHotelListQuery } from '../../modules/hotelList/api/hotelListApiSlice';
import { selectFilteredHotelList } from '../../modules/hotelList/selectors/selectFilteredHotelList';
import { spinner } from '../Spinner/Spinner';
import { useAppSelector } from '../../app/store/hooks';

export const HotelList = () => {
  const hotelListLength = useAppSelector(selectFilteredHotelList).length;
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
