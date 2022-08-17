import { hotelsTypes, userTypes } from './constants';

export interface IHotel {
  hotelId: number | null;
  hotelName: string | null;
  priceAvg: number;
  stars: number;
  dateStart: string;
  dateEnd: string;
}

export interface HotelsState {
  pending: boolean;
  hotels: IHotel[];
  location: string | null;
  dateStart: string | Date;
  error: string | null;
}

export interface FetchHotelsRequestPayload {
  location: string;
  dateStart: string;
  dateEnd: string;
}

export interface FetchHotelsRequest {
  type: typeof hotelsTypes.FETCH_HOTELS_REQUEST;
  payload: FetchHotelsRequestPayload;
}

export type FetchHotelsSuccess = {
  type: typeof hotelsTypes.FETCH_HOTELS_SUCCESS;
  payload: FetchHotelsSuccessPayload;
};

export interface FetchHotelsSuccessPayload {
  hotels: IHotel[];
  dateStart: string;
  dateEnd: string;
  location: string;
}

export interface FetchHotelsFailurePayload {
  error: string;
}

export type FetchHotelsFailure = {
  type: typeof hotelsTypes.FETCH_HOTELS_FAILURE;
  payload: FetchHotelsFailurePayload;
};

export type HotelsActions =
  | FetchHotelsRequest
  | FetchHotelsSuccess
  | FetchHotelsFailure;

export interface UserState {
  email: string;
  favoritesHotels: IHotel[];
}

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

export type UserActions =
  | LoadFavoriteHotels
  | SetFavoriteHotels
  | UnsetFavoriteHotels
  | SetUser;
