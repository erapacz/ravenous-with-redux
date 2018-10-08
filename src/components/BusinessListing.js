import React, {Component} from 'react';
import '../styles/App.css';
import {Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import {connect} from 'react-redux';


class BusinessListing extends Component {
  render() {
    return(
      <div className="BusinessListing">
        <Map google={this.props.google}
             style={{width: '100%', height: '75%', position: 'relative'}}
             initialCenter={{
               lat: 41.8818,
               lng: -87.6232
             }}
             zoom={12}>
             {this.props.data.businesses.map((business) => {
               return (
                 <Marker key={business.id}
                         title={business.name}
                         position={{lat: business.coordinates.latitude, lng: business.coordinates.longitude}} />
               );
             })
           }
       </Map>
     </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.businesses
  };
}

const WrappedContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyAq06l5RUVfib62IYRQacLc-KAy0XIWAVs'
})(BusinessListing);

export default connect(mapStateToProps)(WrappedContainer);
