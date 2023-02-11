import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchHotelListData } from '../../../modules/hotelList/hotelListAction';
import { spinner } from '../../../UI/Spinner/Spinner';
import { Notification } from '../../../UI/Notification/Notification';
import { HotelListContent } from './HotelListContent/HotelListContent';
import { AppDispatch } from '../../types/rootState';
import { useGetHotelListQuery } from '../../../modules/hotelList/api/hotelList';
import { selectFilteredHotelListApi } from '../../../modules/hotelList/api/selector';

export const HotelList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const hotelListLength = useSelector(selectFilteredHotelListApi).length;

  useEffect(() => {
    dispatch(fetchHotelListData());
  }, [dispatch]);

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
