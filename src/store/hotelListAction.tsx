import { Hotel } from '../models/Hotel';
import { RoomsDetails } from '../models/Room';
import PromisePool from '@supercharge/promise-pool';
import { Dispatch } from 'redux';
import ApiQueryStatusSlice, { ApiQueryStatus } from './ApiStatusSlice';
import hotelListSlice from './hotelListSlice';

const getHotelList = async (): Promise<Hotel[]> => {
  const listResp = await fetch(
    'https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG'
  );

  if (!listResp.ok) {
    throw new Error('Could not fetch hotel data!');
  }

  return await listResp.json();
};

const getRoomList = async (id: string): Promise<RoomsDetails> => {
  const dataResp = await fetch(
    'https://obmng.dbm.guestline.net/api/roomRates/OBMNG/' + id
  );

  if (!dataResp.ok) {
    throw new Error('Could not fetch hotel data!');
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
      const hotelList = await getHotelList();

      const roomList = await PromisePool.withConcurrency(5)
        .for(hotelList)
        .process(async (hotelItem) => {
          return (hotelItem.roomsDetails = await getRoomList(hotelItem.id));
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
