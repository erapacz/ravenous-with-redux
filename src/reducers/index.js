import { combineReducers } from 'redux';
import BusinessesReducer from './BusinessesReducer';
import ModalReducer from './ModalReducer';

const rootReducer = combineReducers({
  businesses: BusinessesReducer,
  modal: ModalReducer
});

export default rootReducer;
