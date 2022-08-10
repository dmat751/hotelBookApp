import { Hotel } from '../../types/hotel';
import { RoomsDetails } from '../../types/room';
import PromisePool from '@supercharge/promise-pool';
import { Dispatch } from 'redux';
import ApiQueryStatusSlice, { ApiQueryStatus } from './ApiStatusSlice';
import hotelListSlice from './hotelListSlice';

const getApiData = async <T,>(url: string): Promise<T> => {
  const dataResp = await fetch(url);

  if (!dataResp.ok) {
    throw new Error('Could not fetch data!');
  }

  return await dataResp.json();
};

export const fetchHotelListData = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const newApiStatusLoading: ApiQueryStatus = {
        isError: false,
        notification: 'Loading...',
        isLoading: true,
      };
      dispatch(
        ApiQueryStatusSlice.actions.setApiQueryStatus(newApiStatusLoading)
      );
      const hotelList = await getApiData<Hotel[]>(
        `${process.env.REACT_APP_HOTEL_LIST_URL}`
      );

      const roomList = await PromisePool.withConcurrency(5)
        .for(hotelList)
        .process(async (hotelItem) => {
          return (hotelItem.roomsDetails = await getApiData<RoomsDetails>(
            `${process.env.REACT_APP_ROOM_LIST_URL + hotelItem.id}`
          ));
        });

      if (roomList.errors.length === 0) {
        const newApiStatusDone: ApiQueryStatus = {
          isError: false,
          notification: '',
          isLoading: false,
        };
        dispatch(
          ApiQueryStatusSlice.actions.setApiQueryStatus(newApiStatusDone)
        );
        dispatch(hotelListSlice.actions.replaceHotelList(hotelList));
      } else {
        const newApiStatusDone: ApiQueryStatus = {
          isError: true,
          notification: 'Error - can not fetch room data',
          isLoading: false,
        };
        dispatch(
          ApiQueryStatusSlice.actions.setApiQueryStatus(newApiStatusDone)
        );
      }
    } catch (error) {
      const newApiStatusError: ApiQueryStatus = {
        isError: true,
        notification: 'Error - can not fetch data',
        isLoading: false,
      };
      dispatch(
        ApiQueryStatusSlice.actions.setApiQueryStatus(newApiStatusError)
      );
    }
  };
};
