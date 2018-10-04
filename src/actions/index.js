import axios from 'axios';

export const FETCH_BUSINESSES = 'FETCH_BUSINESSES';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

const apiKey = 'yU52b_3-gLXelu5XHduCXtYigiJ9a0i_T1aB88jTvEFK1AM5umx5gpYk73uQxBVX-VQ6iQ1Hcoa0gpb-MWJZtrgysM0A81Bqfbj8iMA0dSdqIywbgWWwF9ZbbnmuW3Yx';

export function requestBusinesses(term, location, sortBy){
  const businesses = axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }})

  console.log(term, location, sortBy, businesses)
  return {
    type: FETCH_BUSINESSES,
    payload: businesses
  }
}

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
