import { userTypes } from '../constants';
import { UserState, UserActions, IHotel } from '../types';

const initialState: UserState = {
  email: '',
  favoritesHotels: [],
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

const userReducer = (state = initialState, action: UserActions): UserState => {
  const listsFromLocalStorage = getListsFromLocalStorage();
  const hotels: IHotel[] = [];
  const result: IHotel[] = [];

  switch (action.type) {
    case userTypes.SET_USER:
      return {
        ...state,
        email: action.payload.email,
      };
    case userTypes.LOAD_FAVORITE_HOTELS:
      hotels.push(...listsFromLocalStorage);
      return {
        ...state,
        favoritesHotels: hotels,
      };
    case userTypes.SET_FAVORITE_HOTELS:
      hotels.push(...listsFromLocalStorage, action.payload.hotel);
      setListsToLocalStorage(hotels);
      return {
        ...state,
        favoritesHotels: hotels,
      };
    case userTypes.UNSET_FAVORITE_HOTELS:
      hotels.push(...listsFromLocalStorage);
      result.push(
        ...hotels.filter(
          ({ hotelId }) => hotelId !== action.payload.hotel.hotelId
        )
      );
      setListsToLocalStorage(result);
      return {
        ...state,
        favoritesHotels: result,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
