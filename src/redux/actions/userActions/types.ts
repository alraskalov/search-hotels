import { IHotel } from '../../stateTypes';
import { userTypes } from '../../constants';

export interface SetFavoriteHotelsPayload {
  hotel: IHotel;
}

export type SetFavoriteHotels = {
  type: typeof userTypes.SET_FAVORITE_HOTELS;
  payload: SetFavoriteHotelsPayload;
};

export interface UnsetFavoriteHotelsPayload {
  hotel: IHotel;
}

export type UnsetFavoriteHotels = {
  type: typeof userTypes.UNSET_FAVORITE_HOTELS;
  payload: UnsetFavoriteHotelsPayload;
};

export type LoadFavoriteHotels = {
  type: typeof userTypes.LOAD_FAVORITE_HOTELS;
};

export interface SetUserPayload {
  email: string;
}

export type SetUser = {
  type: typeof userTypes.SET_USER;
  payload: SetUserPayload;
};

export type UserLogout = {
  type: typeof userTypes.USER_LOGOUT;
};

export interface FilterByStarsPayload {
  type: boolean;
}

export type FilterByStars = {
  type: typeof userTypes.FILTER_BY_STARS;
  payload: FilterByStarsPayload;
};

export interface FilterByPricePayload {
  type: boolean;
}

export type FilterByPrice = {
  type: typeof userTypes.FILTER_BY_PRICE;
  payload: FilterByPricePayload;
};

export type UserActions =
  | LoadFavoriteHotels
  | SetFavoriteHotels
  | UnsetFavoriteHotels
  | SetUser
  | UserLogout
  | FilterByPrice
  | FilterByStars;
