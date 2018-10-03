import React from 'react';
import '../styles/App.css';
import Business from './Business';

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
