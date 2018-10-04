import { FETCH_BUSINESSES } from '../actions';

export default function businesses(state = {businesses: []}, action) {
  switch(action.type) {
    case FETCH_BUSINESSES:
      return {
        ...state,
        businesses: action.payload.data.businesses
      };
    default:
      return state;
  }
}
