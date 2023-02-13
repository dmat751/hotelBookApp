import {createSelector} from "@reduxjs/toolkit";
import {hotelsApiSlice} from "./api/hotelsApiSlice";
import {Photo} from "./types/room";
import {createHotelImages} from "./queries/createHotelImages";
import {getRandomNumber} from "../../app/utils/getRandomNumber";
import {getMaxHotelValueByProp} from "./queries/getMaxHotelValueByProp";
import {selectHotelFilters} from "../HotelFilters/hotelFiltersSelectors";
import {amountFilter} from "./queries/hotelFilters/amountFilter";
import {starFilter} from "./queries/hotelFilters/starFilter";
import {removeHotelsWithoutRooms} from "./queries/hotelFilters/removeHotelsWithoutRooms";

export const selectAllHotels = createSelector(
    [hotelsApiSlice.endpoints.getHotels.select()],
    (hotelList) => hotelList.data ?? []
);

export const selectRandomHotelPhoto = createSelector(
    [selectAllHotels],
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
    [selectAllHotels, selectHotelFilters],
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
    [selectAllHotels],
    (hotelList) => {
        const starsMaxes = hotelList.map((hotel) => hotel.starRating);
        const defaultMaxStarsValue = 5;

        return starsMaxes.length > 0
            ? Math.max(...starsMaxes)
            : defaultMaxStarsValue;
    }
);

export const selectMaxChildrenInHotels = createSelector(
    [selectAllHotels],
    (hotelList) => getMaxHotelValueByProp(hotelList, 'maxChildren')
);

export const selectMaxAdultsInHotels = createSelector(
    [selectAllHotels],
    (hotelList) => getMaxHotelValueByProp(hotelList, 'maxAdults')
);