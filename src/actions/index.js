import axios from 'axios';

export const REQUEST_BUSINESSES = 'REQUEST_BUSINESSES';
export const SEARCH_PARAMS = 'SEARCH_PARAMS';
export const SET_TERM = 'SET_TERM';
export const SET_LOCATION = 'SET_LOCATION';
export const SET_SORT = 'SET_SORT';

const apiKey = 'yU52b_3-gLXelu5XHduCXtYigiJ9a0i_T1aB88jTvEFK1AM5umx5gpYk73uQxBVX-VQ6iQ1Hcoa0gpb-MWJZtrgysM0A81Bqfbj8iMA0dSdqIywbgWWwF9ZbbnmuW3Yx';

export function requestBusinesses(term, location, sortBy){
  console.log(term, location, sortBy);
  return {
    type: SEARCH_PARAMS,
    term: term,
    location: location,
    sortBy: sortBy
  }
}

export function searchYelp(term = null, location = null, sortBy = null){
  const data = axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  });

  return {
    type: REQUEST_BUSINESSES,
    payload: data
  }
}
