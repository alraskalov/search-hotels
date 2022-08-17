export enum hotelsTypes {
  FETCH_HOTELS_REQUEST = 'FETCH_HOTELS_REQUEST',
  FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS',
  FETCH_HOTELS_FAILURE = 'FETCH_HOTELS_FAILURE',
}

export enum userTypes {
  SET_USER = 'SET_USER',
  USER_LOGOUT = 'USER_LOGOUT',
  LOAD_FAVORITE_HOTELS = 'LOAD_FAVORITE_HOTELS',
  SET_FAVORITE_HOTELS = 'SET_FAVORITE_HOTELS',
  UNSET_FAVORITE_HOTELS = 'UNSET_FAVORITE_HOTELS',
  FILTER_BY_STARS = "FILTER_BY_STARS",
  FILTER_BY_PRICE = "FILTER_BY_PRICE"
}
