import { combineReducers } from 'redux';
import hotelReducer from './hotelReducer';

const rootReducer = combineReducers({
  hotel: hotelReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
