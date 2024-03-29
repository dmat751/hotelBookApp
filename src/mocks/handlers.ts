import type { Hotel } from '@/modules/Hotels/types/Hotel';
import type { RoomsDetails } from '@/modules/Hotels/types/RoomDetails';
import { rest } from 'msw';
import validHotelData from './hotelsData/validHotelData.json';
import validRoomsData from './roomsData/validRoomsData.json';

const getHotelIds = (validHotelData: Hotel[]) =>
  validHotelData.map((hotel) => hotel.id);

const getRoomsUrls = (roomsUrl: string, hotelIds: string[]) =>
  hotelIds.map((hotelID) => roomsUrl + hotelID);

const generateApiRoomsEndpoints = (
  basicRoomsUrl: string,
  hotelIds: string[],
  roomsData: RoomsDetails[]
) =>
  getRoomsUrls(basicRoomsUrl, hotelIds).map((roomUrl, index) =>
    rest.get(`${roomUrl}`, (req, res, ctx) =>
      res(ctx.status(200), ctx.json(roomsData[index] ?? roomsData))
    )
  );

const validHotelDataObj: Hotel[] = JSON.parse(JSON.stringify(validHotelData));
const validRoomsDataObj: RoomsDetails[] = JSON.parse(
  JSON.stringify(validRoomsData)
);

const validRoomsEndpoints = generateApiRoomsEndpoints(
  `${process.env.REACT_APP_ROOM_LIST_URL}`,
  getHotelIds(validHotelDataObj),
  validRoomsDataObj
);

export const handlers = [
  rest.get(
    `${process.env.REACT_APP_HOTEL_LIST_BASE_URL_MSW}`,
    (req, res, ctx) => {
      const collectionId = req.url.searchParams.get('collection-id');
      if (collectionId === 'OBMNG') {
        return res(ctx.status(200), ctx.json(validHotelData));
      }
      if (collectionId === 'INVALID') {
        return res(ctx.status(500), ctx.json('invalid hotel json data'));
      }
    }
  ),
  ...validRoomsEndpoints,
];
