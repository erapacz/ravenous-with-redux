import axios from 'axios';

const apiKey = 'yU52b_3-gLXelu5XHduCXtYigiJ9a0i_T1aB88jTvEFK1AM5umx5gpYk73uQxBVX-VQ6iQ1Hcoa0gpb-MWJZtrgysM0A81Bqfbj8iMA0dSdqIywbgWWwF9ZbbnmuW3Yx';

const Yelp = {
  search(term, location, sortBy) {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.data;
    }).then(jsonResponse => {
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category:business.categories.title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        });
      }
    });
  }
};

export default Yelp;
