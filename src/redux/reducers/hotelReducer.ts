import { hotelsTypes } from '../constants';
import { HotelsState, HotelsActions, IHotel } from '../types';

const initialState: HotelsState = {
  pending: false,
  hotels: [],
  favoritesHotels: [],
  location: null,
  dateStart: new Date(),
  error: null,
};

const getListsFromLocalStorage = (): IHotel[] => {
  if (localStorage.getItem('hotels')) {
    return JSON.parse(localStorage.getItem('hotels') || '[]');
  }
  return [];
};

const setListsToLocalStorage = (hotels: IHotel[]) => {
  localStorage.setItem('hotels', JSON.stringify(hotels));
};

const hotelReducer = (
  state = initialState,
  action: HotelsActions
): HotelsState => {
  const listsFromLocalStorage = getListsFromLocalStorage();
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
          isLiked: false,
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
    case hotelsTypes.FETCH_HOTELS_FAILURE:
      return {
        ...state,
        pending: false,
        hotels: [],
        location: null,
        dateStart: '',
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default hotelReducer;