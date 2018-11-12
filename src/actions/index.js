import axios from 'axios';

export const FETCH_BUSINESSES_STARTED = 'FETCH_BUSINESSES_STARTED';
export const FETCH_BUSINESSES_SUCCESS = 'FETCH_BUSINESSES_SUCCESS';
export const FETCH_BUSINESSES_FAIL = 'FETCH_BUSINESSES_FAIL';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

const apiKey = 'yU52b_3-gLXelu5XHduCXtYigiJ9a0i_T1aB88jTvEFK1AM5umx5gpYk73uQxBVX-VQ6iQ1Hcoa0gpb-MWJZtrgysM0A81Bqfbj8iMA0dSdqIywbgWWwF9ZbbnmuW3Yx';

export const requestBusinesses = (term, location, sortBy) => {
  console.log(term, location, sortBy)
  return dispatch => {
    dispatch(requestBusinessesStarted());

    axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
          headers: {
          Authorization: `Bearer ${apiKey}`
      }})
      .then(res => {
        dispatch(requestBusinessesSuccess(res.data));
      })
      .catch(err => {
        dispatch(requestBusinessesFail(err.message));
      });
  };
};

const requestBusinessesSuccess = (businesses, region) => ({
  type: FETCH_BUSINESSES_SUCCESS,
  payload: {
    businesses,
    region
  }
});

const requestBusinessesStarted = () => ({
    type: FETCH_BUSINESSES_STARTED
});

const requestBusinessesFail = error => ({
  type: FETCH_BUSINESSES_FAIL,
  payload: {
    error
  }
});

export function openModal(business) {
  return {
    type: OPEN_MODAL,
    business
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}
