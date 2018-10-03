import React from 'react';
import '../styles/App.css';

const Business = ({business, onBusinessSelect}) => {
  console.log(business);
  return (
    <div className="Business" onClick={() => onBusinessSelect(business)}>
      <div className="image-container">
        <img src={business.imageSrc} alt={business.name} />
      </div>
      <h2>{business.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zipCode}`}</p>
        </div>
        <div className="Business-reviews">
          <h3>{business.category}</h3>
          <h3 className="rating">{`${business.rating} stars`}</h3>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  )
};

export default Business;
