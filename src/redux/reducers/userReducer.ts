import { userTypes } from '../constants';
import { UserState, IHotel } from '../stateTypes';
import { UserActions } from '../actions/userActions/types';

const initialState: UserState = {
  email: '',
  favoritesHotels: [],
  appliedFilter: [],
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

const sortAsc = (arr: IHotel[], type: string) => {
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

const sortDesc = (arr: IHotel[], type: string) => {
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

const addFilterIfNotExists = (filter: string, appliedFilters: any[]) => {
  const index = appliedFilters.indexOf(filter);
  if (index === -1) appliedFilters.push(filter);

  return appliedFilters;
};

const removeFilter = (filter: string, appliedFilters: any[]) => {
  const index = appliedFilters.indexOf(filter);
  appliedFilters.splice(index, 1);
  return appliedFilters;
};

const userReducer = (state = initialState, action: UserActions): UserState => {
  const listsFromLocalStorage = getListsFromLocalStorage();
  const hotels: IHotel[] = [];
  const result: IHotel[] = [];

  const sortedArr: any[] = [];
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
        ...(action.payload.type
          ? sortAsc(state.favoritesHotels, 'price')
          : sortDesc(state.favoritesHotels, 'price'))
      );
      state.favoritesHotels = sortedArr;
      console.log(state.favoritesHotels);
      console.log(sortedArr);
      state.appliedFilter = addFilterIfNotExists(
        userTypes.FILTER_BY_STARS,
        state.appliedFilter
      );
      console.log(state.appliedFilter);

      state.appliedFilter = removeFilter(
        userTypes.FILTER_BY_PRICE,
        state.appliedFilter
      );

      console.log(state.appliedFilter);

      return state;
    case userTypes.FILTER_BY_STARS:
      sortedArr.push(
        ...(action.payload.type
          ? sortAsc(state.favoritesHotels, 'stars')
          : sortDesc(state.favoritesHotels, 'stars'))
      );
      state.favoritesHotels = sortedArr;
      console.log(state.favoritesHotels);
      console.log(sortedArr);
      state.appliedFilter = addFilterIfNotExists(
        userTypes.FILTER_BY_STARS,
        state.appliedFilter
      );
      console.log(state.appliedFilter);

      state.appliedFilter = removeFilter(
        userTypes.FILTER_BY_STARS,
        state.appliedFilter
      );

      console.log(state.appliedFilter);

      return state;
    case userTypes.USER_LOGOUT:
      return {
        email: '',
        favoritesHotels: [],
        appliedFilter: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
