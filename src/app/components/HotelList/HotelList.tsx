import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchHotelListData } from '../../../modules/hotelList/hotelListAction';
import { spinner } from '../../../UI/Spinner/Spinner';
import { Notification } from '../../../UI/Notification/Notification';
import { HotelListContent } from './HotelListContent/HotelListContent';
import { selectFilteredHotelList } from '../../../modules/hotelList/filteredHotelListSelector';
import { selectHotelListStatus } from '../../../modules/hotelList/statusSelector';
import { selectHotelListError } from '../../../modules/hotelList/errorSelector';
import { AppDispatch } from '../../types/rootState';
import { useGetHotelListQuery } from '../../../modules/hotelList/api/hotelList';

export const HotelList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const hotelListLength = useSelector(selectFilteredHotelList).length;
  const dataStatus = useSelector(selectHotelListStatus);
  const isDataError = useSelector(selectHotelListError);

  useEffect(() => {
    dispatch(fetchHotelListData());
  }, [dispatch]);

  const { data, error, isLoading } = useGetHotelListQuery();
  console.log(data);

  const isApiLoading = dataStatus === 'loading';
  const isContentVisible = !isApiLoading && !isDataError;
  const isHotelsNoFoundNotificationVisible =
    hotelListLength === 0 && !isApiLoading;

  return (
    <div className="flex flex-col items-center">
      {isContentVisible && <HotelListContent />}
      {isApiLoading && spinner}
      {isDataError && <Notification message={isDataError} msgType="error" />}
      {isHotelsNoFoundNotificationVisible && (
        <Notification message="We can not find any hotels" msgType="info" />
      )}
    </div>
  );
};
