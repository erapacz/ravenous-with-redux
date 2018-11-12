import React, {Component} from 'react';
import '../styles/App.css';
import {Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import {connect} from 'react-redux';


class BusinessListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };
}

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  render() {
    return(
      <div className="BusinessListing">
        <Map google={this.props.google}
             style={{width: '100%', height: '75%', position: 'relative'}}
             initialCenter={{
               lat: this.props.region.center.latitude,
               lng: this.props.region.center.longitude
             }}
             zoom={12}>
             {this.props.data.map((business) => {
               return (
                 <Marker key={business.id}
                         title={business.name}
                         position={{lat: business.coordinates.latitude, lng: business.coordinates.longitude}}
                         onClick={this.onMarkerClick} />
               );
             })
           }
           <InfoWindow
             marker={this.state.activeMarker}
             visible={this.state.showingInfoWindow}>
               <div>
                 <h1>{this.state.selectedPlace.title}</h1>
               </div>
             </InfoWindow>
       </Map>
     </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.businesses.businesses,
    region: state.businesses.region
  };
}

const WrappedContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyAq06l5RUVfib62IYRQacLc-KAy0XIWAVs'
})(BusinessListing);

export default connect(mapStateToProps)(WrappedContainer);
