import { hotelsTypes } from '../../constants';
import { IHotel } from '../../stateTypes';

export interface FetchHotelsRequestPayload {
  location: string;
  dateStart: string;
  dateEnd: string;
  dayCount: string;
}

export interface FetchHotelsRequest {
  type: typeof hotelsTypes.FETCH_HOTELS_REQUEST;
  payload: FetchHotelsRequestPayload;
}

export interface FetchHotelsSuccessPayload {
  hotels: IHotel[];
  dateStart: string;
  dateEnd: string;
  location: string;
  dayCount: string;
}

export type FetchHotelsSuccess = {
  type: typeof hotelsTypes.FETCH_HOTELS_SUCCESS;
  payload: FetchHotelsSuccessPayload;
};

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
