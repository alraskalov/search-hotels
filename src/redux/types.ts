import { hotelsTypes } from './constants';

export interface IHotel {
  hotelId: number | null;
  hotelName: string | null;
  priceAvg: number;
  stars: number;
  isLiked: boolean;
  dateStart: string;
  dateEnd: string;
}

export interface HotelsState {
  pending: boolean;
  hotels: IHotel[];
  favoritesHotels: IHotel[];
  location: string | null;
  dateStart: string | Date;
  error: string | null;
}

export interface FetchHotelsRequestPayload {
  location: string;
  dateStart: string;
  dateEnd: string;
}

export interface FetchHotelsSuccessPayload {
  hotels: IHotel[];
  dateStart: string;
  dateEnd: string;
  location: string;
}

export interface FetchHotelsFailurePayload {
  error: string;
}

export interface FetchHotelsRequest {
  type: typeof hotelsTypes.FETCH_HOTELS_REQUEST;
  payload: FetchHotelsRequestPayload;
}

export type FetchHotelsSuccess = {
  type: typeof hotelsTypes.FETCH_HOTELS_SUCCESS;
  payload: FetchHotelsSuccessPayload;
};

export type FetchHotelsFailure = {
  type: typeof hotelsTypes.FETCH_HOTELS_FAILURE;
  payload: FetchHotelsFailurePayload;
};

export type HotelsActions =
  | FetchHotelsRequest
  | FetchHotelsSuccess
  | FetchHotelsFailure;
