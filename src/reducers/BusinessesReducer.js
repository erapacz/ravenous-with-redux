import { SEARCH_PARAMS } from '../actions';

const initialState = {
  term: '',
  location: '',
  sortBy: '',
};

export default function businesses(state = initialState, action) {
  switch(action.type) {
    case SEARCH_PARAMS:
      return {
        ...state,
        term: action.data,
        location: action.data,
        sortBy: action.data
      }
    default:
      return state;
  }
}
