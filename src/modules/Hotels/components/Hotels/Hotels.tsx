import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectErrorType,
  selectIsDataError,
  selectIsDataStatus,
  selectNumberOfFilteredHotels,
} from '../../Selectors';
import { Spinner } from '../../../../components/Spinner/Spinner';
import { fetchData } from '../../Slice';
import { HotelsContent } from './HotelsContent/HotelsContent';
import { Notification } from '../../../../components/Notification/Notification';
import { useAppDispatch } from '../../../../app/store/hooks';

export const Hotels = () => {
  const dispatch = useAppDispatch();
  const numberOfFilteredHotels = useSelector(selectNumberOfFilteredHotels);
  const dataStatus = useSelector(selectIsDataStatus);
  const apiNotification = useSelector(selectErrorType);
  const isApiError = useSelector(selectIsDataError);

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
