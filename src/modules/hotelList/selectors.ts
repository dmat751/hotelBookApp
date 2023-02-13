import {createSelector} from "@reduxjs/toolkit";
import {hotelListApiSlice} from "./api/hotelListApiSlice";
import {Photo} from "./types/room";
import {createHotelImages} from "./queries/createHotelImages";
import {getRandomNumber} from "../../app/utils/getRandomNumber";
import {getMaxHotelValueByProp} from "./queries/getMaxHotelValueByProp";
import {selectHotelFilters} from "../hotelFilters/hotelFiltersSelectors";
import {amountFilter} from "./queries/hotelFilters/amountFilter";
import {starFilter} from "./queries/hotelFilters/starFilter";
import {removeHotelsWithoutRooms} from "./queries/hotelFilters/removeHotelsWithoutRooms";

export const selectAllHotelList = createSelector(
    [hotelListApiSlice.endpoints.getHotelList.select()],
    (hotelList) => hotelList.data ?? []
);

export const selectRandomHotelPhoto = createSelector(
    [selectAllHotelList],
    (hotelList) => {
        const imgArray: Photo[] = createHotelImages(hotelList);

        if (imgArray.length === 0) {
            const defaultResult: Photo = {alt: '', url: ''};
            return defaultResult;
        }

        const randomImgArrayIndex = getRandomNumber(0, imgArray.length - 1);

        return imgArray[randomImgArrayIndex];
    }
);

export const selectFilteredHotels = createSelector(
    [selectAllHotelList, selectHotelFilters],
    (unfilteredHotelList, hotelFilters) => {
        let filteredHotelList = unfilteredHotelList;
        filteredHotelList = amountFilter(
            filteredHotelList,
            hotelFilters.children,
            'children'
        );

        filteredHotelList = amountFilter(
            filteredHotelList,
            hotelFilters.adults,
            'adults'
        );

        filteredHotelList = starFilter(filteredHotelList, hotelFilters.stars);

        filteredHotelList = removeHotelsWithoutRooms(filteredHotelList);

        return filteredHotelList;
    }
);

export const selectHotelsLength = createSelector(
    [selectFilteredHotels],
    (hotelList) => hotelList.length
);

export const selectMaxHotelStars = createSelector(
    [selectAllHotelList],
    (hotelList) => {
        const starsMaxes = hotelList.map((hotel) => hotel.starRating);
        const defaultMaxStarsValue = 5;

        return starsMaxes.length > 0
            ? Math.max(...starsMaxes)
            : defaultMaxStarsValue;
    }
);

export const selectMaxChildrenInHotels = createSelector(
    [selectAllHotelList],
    (hotelList) => getMaxHotelValueByProp(hotelList, 'maxChildren')
);

export const selectMaxAdultsInHotels = createSelector(
    [selectAllHotelList],
    (hotelList) => getMaxHotelValueByProp(hotelList, 'maxAdults')
);