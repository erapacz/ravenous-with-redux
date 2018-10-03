import React from 'react';

const BusinessTemp = ({businesses}) => {
  const businessItems = businesses.map((business) => {
    return(
      <li key={business.id}><p>{business.name}</p></li>
    );
  });

  return (
    <ul className="BusinessList">{businessItems}</ul>
  );
};

export default BusinessTemp;
