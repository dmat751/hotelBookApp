import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { Notification } from '@/components/Notification/Notification';
import { Spinner } from '@/components/Spinner/Spinner';
import { HotelsContent } from '@/modules/Hotels/components/Hotels/HotelsContent/HotelsContent';
import {
  selectNumberOfFilteredHotels,
  selectDataStatus,
  selectErrorType,
  selectIsDataError,
} from '@/modules/Hotels/selectors';
import { fetchData } from '@/modules/Hotels/slice';
import { useEffect } from 'react';

export const Hotels = () => {
  const dispatch = useAppDispatch();
  const numberOfFilteredHotels = useAppSelector(selectNumberOfFilteredHotels);
  const dataStatus = useAppSelector(selectDataStatus);
  const apiNotification = useAppSelector(selectErrorType);
  const isApiError = useAppSelector(selectIsDataError);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const isContentVisible = dataStatus === 'resolved';
  const isVisibleHotelsNoFoundNotification =
    numberOfFilteredHotels === 0 && isContentVisible;

  return (
    <div className="flex flex-col items-center">
      {isContentVisible && <HotelsContent />}
      {!isContentVisible && <Spinner />}
      {isApiError && <Notification message={apiNotification} msgType="error" />}
      {isVisibleHotelsNoFoundNotification && (
        <Notification message="We can not find any hotels" msgType="info" />
      )}
    </div>
  );
};
