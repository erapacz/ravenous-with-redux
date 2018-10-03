import { combineReducers } from 'redux';
import BusinessesReducer from './BusinessesReducer';

const rootReducer = combineReducers({
  businesses: BusinessesReducer
});

export default rootReducer;
