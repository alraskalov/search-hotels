import {
  SetFavoriteHotelsPayload,
  LoadFavoriteHotels,
  SetFavoriteHotels,
  UnsetFavoriteHotelsPayload,
  UnsetFavoriteHotels,
  SetUserPayload,
  SetUser,
  UserLogout,
  FilterByStars,
  FilterByPrice,
  ResetFilter,
} from './types';
import { userTypes } from '../../constants';

export const setFavoriteHotel = (
  payload: SetFavoriteHotelsPayload
): SetFavoriteHotels => ({
  type: userTypes.SET_FAVORITE_HOTELS,
  payload,
});

export const unsetFavoriteHotel = (
  payload: UnsetFavoriteHotelsPayload
): UnsetFavoriteHotels => ({
  type: userTypes.UNSET_FAVORITE_HOTELS,
  payload,
});

export const loadFavoriteHotel = (): LoadFavoriteHotels => ({
  type: userTypes.LOAD_FAVORITE_HOTELS,
});

export const setUser = (payload: SetUserPayload): SetUser => ({
  type: userTypes.SET_USER,
  payload,
});

export const userLogout = (): UserLogout => ({
  type: userTypes.USER_LOGOUT,
});

export const filterByStars = (): FilterByStars => ({
  type: userTypes.FILTER_BY_STARS,
});

export const filterByPrice = (): FilterByPrice => ({
  type: userTypes.FILTER_BY_PRICE,
});

export const resetFilter = (): ResetFilter => ({
  type: userTypes.RESET_FILTER,
});
