import { hotelsTypes } from '../constants';
import {
  FetchHotelsRequest,
  FetchHotelsFailure,
  FetchHotelsSuccess,
  FetchHotelsSuccessPayload,
  FetchHotelsFailurePayload,
  FetchHotelsRequestPayload,

} from '../types';

export const fetchHotelsRequest = (
  payload: FetchHotelsRequestPayload
): FetchHotelsRequest => ({
  type: hotelsTypes.FETCH_HOTELS_REQUEST,
  payload,
});

export const fetchHotelsSuccess = (
  payload: FetchHotelsSuccessPayload
): FetchHotelsSuccess => ({
  type: hotelsTypes.FETCH_HOTELS_SUCCESS,
  payload,
});

export const fetchHotelsFailure = (
  payload: FetchHotelsFailurePayload
): FetchHotelsFailure => ({
  type: hotelsTypes.FETCH_HOTELS_FAILURE,
  payload,
});


