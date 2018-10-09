import React, {Component} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';

class BusinessModal extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {}
//   };
// }
//
//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });

  render() {
    if(!this.props.selectedBusiness) {
        return <div></div>
    } else {
      return (
        <Modal
          ariaHideApp={false}
          isOpen={ this.props.modalIsOpen }
          onRequestClose={ () => this.props.onRequestClose() }>
          <div>
            <Map google={this.props.google}
                 style={{width: '85%', height: '75%', position: 'relative'}}
                 initialCenter={{
                   lat: this.props.selectedBusiness.coordinates.latitude,
                   lng: this.props.selectedBusiness.coordinates.longitude
                 }}
                 zoom={14}>
                 <Marker key={this.props.selectedBusiness.id}
                             title={this.props.selectedBusiness.name}
                             position={{lat: this.props.selectedBusiness.coordinates.latitude, lng: this.props.selectedBusiness.coordinates.longitude}} />
                 {/* <InfoWindow marker={this.state.activeMarker}
                             visible={this.state.showingInfoWindow}>
                             <div>
                               <h1>{this.state.selectedPlace.title}</h1>
                             </div>
                 </InfoWindow> */}
             </Map>
             <p style={{position: 'absolute', top:"80%"}}>{this.props.selectedBusiness.name}</p>
             <p style={{position: 'absolute', top:"85%"}}>{!this.props.selectedBusiness.price ? '' : 'Price: ' + this.props.selectedBusiness.price}</p>
             <button style={{position: 'absolute', top: '90%'}} onClick={() => this.props.actions.closeModal()}>close</button>
          </div>
        </Modal>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    modalIsOpen: state.modal.modalIsOpen,
    selectedBusiness: state.modal.selectedBusiness
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

const WrappedContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyAq06l5RUVfib62IYRQacLc-KAy0XIWAVs'
})(BusinessModal);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedContainer);
