import { userTypes } from '../constants';
import { UserState, IHotel } from '../stateTypes';
import { UserActions } from '../actions/userActions/types';

const initialState: UserState = {
  email: '',
  favoritesHotels: [],
  appliedFilter: {
    price: {
      type: '',
    },
    stars: {
      type: '',
    },
  },
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

const sortAsc = (arr: IHotel[], type: string): IHotel[] => {
  if (type === 'price') {
    return arr.sort((curr, next) => {
      if (curr.priceAvg > next.priceAvg) return 1;

      if (next.priceAvg > curr.priceAvg) return -1;

      return 0;
    });
  } else {
    return arr.sort((curr, next) => {
      if (curr.stars > next.stars) return 1;

      if (next.stars > curr.stars) return -1;

      return 0;
    });
  }
};

const sortDesc = (arr: IHotel[], type: string): IHotel[] => {
  if (type === 'price') {
    return arr.sort((curr, next) => {
      if (curr.priceAvg > next.priceAvg) return -1;

      if (next.priceAvg > curr.priceAvg) return 1;

      return 0;
    });
  } else {
    return arr.sort((curr, next) => {
      if (curr.stars > next.stars) return -1;

      if (next.stars > curr.stars) return 1;

      return 0;
    });
  }
};

const userReducer = (state = initialState, action: UserActions): UserState => {
  const listsFromLocalStorage = getListsFromLocalStorage();
  const hotels: IHotel[] = [];
  const result: IHotel[] = [];

  const sortedArr: IHotel[] = [];
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
    case userTypes.FILTER_BY_PRICE:
      sortedArr.push(
        ...(state.appliedFilter.price.type === 'asc'
          ? sortAsc(state.favoritesHotels, 'price')
          : sortDesc(state.favoritesHotels, 'price'))
      );

      return {
        ...state,
        favoritesHotels: sortedArr,
        appliedFilter: {
          price: {
            type: state.appliedFilter.price.type === 'asc' ? 'desc' : 'asc',
          },
          stars: {
            type: state.appliedFilter.stars.type,
          },
        },
      };
    case userTypes.FILTER_BY_STARS:
      sortedArr.push(
        ...(state.appliedFilter.stars.type === 'asc'
          ? sortAsc(state.favoritesHotels, 'stars')
          : sortDesc(state.favoritesHotels, 'stars'))
      );

      return {
        ...state,
        favoritesHotels: sortedArr,
        appliedFilter: {
          price: {
            type: state.appliedFilter.price.type,
          },
          stars: {
            type: state.appliedFilter.stars.type === 'asc' ? 'desc' : 'asc',
          },
        },
      };
    case userTypes.RESET_FILTER:
      return {
        ...state,
        appliedFilter: {
          price: {
            type: '',
          },
          stars: {
            type: '',
          },
        },
      };
    case userTypes.USER_LOGOUT:
      return {
        email: '',
        favoritesHotels: [],
        appliedFilter: {
          price: {
            type: '',
          },
          stars: {
            type: '',
          },
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
