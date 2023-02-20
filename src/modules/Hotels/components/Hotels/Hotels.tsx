import { Notification } from '@/components/Notification/Notification';
import { Spinner } from '@/components/Spinner/Spinner';
import { useGetHotelsQuery } from '@/modules/Hotels/api';
import { HotelsContent } from '@/modules/Hotels/components/Hotels/HotelsContent/HotelsContent';
import { selectNumberOfFilteredHotels } from '@/modules/Hotels/selectors';
import { useAppSelector } from '@store/hooks';

export const Hotels = () => {
  const numberOfHotels = useAppSelector(selectNumberOfFilteredHotels);
  const { isLoading, isError } = useGetHotelsQuery();

  const canShowHotels = !isLoading && !isError;
  const isHotelsNoFoundNotificationVisible =
    numberOfHotels === 0 && canShowHotels;

  return (
    <div className="flex flex-col items-center">
      {canShowHotels && <HotelsContent />}
      {isLoading && <Spinner />}
      {isError && (
        <Notification message="Sorry, can't fetch data" msgType="error" />
      )}
      {isHotelsNoFoundNotificationVisible && (
        <Notification message="We can not find any hotels" msgType="info" />
      )}
    </div>
  );
};
