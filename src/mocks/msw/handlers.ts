import { rest } from 'msw';
import validHotelData from '../validHotelData.json';
import validRoomsData from '../validRoomsData.json';

const getHotelIds = () => validHotelData.map((hotel) => hotel.id);

const getRoomsUrls = () =>
  getHotelIds().map((hotelID) => process.env.REACT_APP_ROOM_LIST_URL + hotelID);

const apiRoomsEndpoints = getRoomsUrls().map((roomUrl, index) =>
  rest.get(`${roomUrl}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(validRoomsData[index]))
  )
);

export const handlers = [
  rest.get(`${process.env.REACT_APP_HOTEL_LIST_URL}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(validHotelData))
  ),
  ...apiRoomsEndpoints,
];
