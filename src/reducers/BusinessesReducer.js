import { FETCH_BUSINESSES_STARTED, FETCH_BUSINESSES_SUCCESS, FETCH_BUSINESSES_FAIL } from '../actions';

const initialState = {
  businesses: [],
  loading: false,
  error: null
}

export default function businesses(state = initialState, action) {
  switch(action.type) {
    case FETCH_BUSINESSES_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_BUSINESSES_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        businesses: action.payload.businesses
      };
    case FETCH_BUSINESSES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
