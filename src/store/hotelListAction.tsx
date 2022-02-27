import { Hotel } from '../models/Hotel';
import { RoomsDetails } from '../models/Room';
import PromisePool from '@supercharge/promise-pool';
import { Dispatch } from 'redux';
import hotelListSlice, { HotelListSliceState } from './hotelListSlice';

const getHotelList = async (): Promise<Hotel[]> => {
  const listResp = await fetch(
    'https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG'
  );
  return await listResp.json();
};

const getRoomList = async (id: string): Promise<RoomsDetails> => {
  const dataResp = await fetch(
    'https://obmng.dbm.guestline.net/api/roomRates/OBMNG/' + id
  );
  return await dataResp.json();
};

export const fetchHotelListData = () => {
  return async (dispatch: Dispatch<any>) => {
    console.log(dispatch);
    const getData = async () => {
      const hotelList = await getHotelList();

      const roomList = await PromisePool.withConcurrency(5)
        .for(hotelList)
        .process(async (hotelItem) => {
          return (hotelItem.roomsDetails = await getRoomList(hotelItem.id));
        });
      console.log(hotelList);
      let hotelData: HotelListSliceState = { hotelList };
      dispatch(hotelListSlice.actions.replaceHotelList(hotelData));
    };
    const hotelListData = await getData();
  };
};
