import { Hotel } from './../../app/types/hotel';
import { call, put, takeEvery } from 'redux-saga/effects';
import PromisePool from '@supercharge/promise-pool/dist';
import { RoomsDetails } from '../../app/types/room';
import {
  getHotelListFailure,
  getHotelListSuccess,
  hotelListActions,
} from './hotelListSlice';

const getApiData = async <T>(url: string): Promise<T> => {
  const dataResp = await fetch(url);
  if (!dataResp.ok) {
    throw new Error('Could not fetch data!');
  }

  return await dataResp.json();
};

const fetchHotelList = async () => {
  const hotelList = await getApiData<Hotel[]>(
    `${process.env.REACT_APP_HOTEL_LIST_URL}`
  );

  const fetchRoomListResults = await PromisePool.withConcurrency(5)
    .for(hotelList)
    .process(async (hotelItem) => {
      return (hotelItem.roomsDetails = await getApiData<RoomsDetails>(
        `${process.env.REACT_APP_ROOM_LIST_URL + hotelItem.id}`
      ));
    });

  if (fetchRoomListResults.errors.length > 0) {
    throw new Error('fetch rooms error');
  }

  return hotelList;
};

function* hotelListFetch() {
  try {
    const hotelList: Hotel[] = yield call(fetchHotelList);
    yield put(getHotelListSuccess(hotelList));
  } catch (error: unknown) {
    const errorMsg =
      error instanceof Error ? error.message : 'fetch error, unknown error';
    yield put(getHotelListFailure(errorMsg));
  }
}

export function* hotelListSagas() {
  yield takeEvery(hotelListActions.fetchData, hotelListFetch);
}
