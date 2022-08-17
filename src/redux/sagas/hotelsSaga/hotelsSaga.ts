import { FetchHotelsRequest } from './../../actions/hotelActions/types';
import { getHotels } from './../../../utils/api';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { hotelsTypes } from '../../constants';
import {
  fetchHotelsFailure,
  fetchHotelsSuccess,
} from '../../actions/hotelActions/hotelActions';

function* workerFetchHotels(action: FetchHotelsRequest): object {
  try {
    const { location, dateStart, dateEnd, dayCount } = action.payload;
    const hotels = yield call(getHotels, location, dateStart, dateEnd);
    yield put(
      fetchHotelsSuccess({
        hotels,
        dateStart,
        dateEnd,
        location,
        dayCount,
      })
    );
  } catch (e) {
    console.log(123);

    yield put(
      fetchHotelsFailure({
        error: (e as Error).message,
      })
    );
  }
}

function* hotelsSaga() {
  yield all([takeEvery(hotelsTypes.FETCH_HOTELS_REQUEST, workerFetchHotels)]);
}

export default hotelsSaga;
