import React from 'react';
import Business from './Business';
import '../styles/App.css';

const BusinessList = (props) => {
  console.log(props);
  const list = props.businesses.map(business => {
    return <Business key={business.id}
                     business={business}
                     onBusinessSelect={props.onBusinessSelect} />
  });

  return (
    <div className="BusinessList">{list}</div>
  );
};

export default BusinessList;
