import { hotelsTypes } from '../constants';
import { HotelsState, HotelsActions, IHotel } from '../types';

const initialState: HotelsState = {
  pending: false,
  hotels: [],
  location: null,
  dateStart: new Date(),
  error: null,
};

const hotelReducer = (
  state = initialState,
  action: HotelsActions
): HotelsState => {
  const hotels: IHotel[] = [];

  switch (action.type) {
    case hotelsTypes.FETCH_HOTELS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case hotelsTypes.FETCH_HOTELS_SUCCESS:
      for (const value of action.payload.hotels) {
        hotels.push({
          hotelId: value.hotelId,
          hotelName: value.hotelName,
          priceAvg: value.priceAvg,
          stars: value.stars,
          dateStart: action.payload.dateStart,
          dateEnd: action.payload.dateEnd,
        });
      }
      return {
        ...state,
        pending: false,
        hotels,
        location: action.payload.location,
        dateStart: action.payload.dateStart,
        error: null,
      };
    // case hotelsTypes.HOTEL_SET_LIKE:
    //   hotels.push(...listsFromLocalStorage, action.payload.hotel);
    //   console.log(hotels);
    //   setListsToLocalStorage(hotels);

    //   return {
    //     ...state,
    //     favoritesHotels: hotels,
    //   };
    // case hotelsTypes.HOTEL_UNSET_LIKE:
    //   hotels.push(...listsFromLocalStorage);
    //   result.push(...hotels.filter(({ hotelId }) => hotelId !== action.payload.hotel.hotelId))
    //   setListsToLocalStorage(result);

    //   return {
    //     ...state,
    //     favoritesHotels: result,
    //   };
    case hotelsTypes.FETCH_HOTELS_FAILURE:
      return {
        ...state,
        pending: false,
        hotels: [],
        location: null,
        dateStart: '',
        error: action.payload.error,
      };
    // case hotelsTypes.SET_FAVORITE_HOTELS:
    //   hotels.push(...listsFromLocalStorage);
    //   return {
    //     ...state,
    //     favoritesHotels: hotels,
    //   };
    default:
      return {
        ...state,
      };
  }
};

export default hotelReducer;
