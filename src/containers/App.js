import React from 'react';
// import BusinessList from '../components/BusinessList';
// import BusinessModal from '../components/BusinessModal';
import SearchBar from '../components/SearchBar';
import '../styles/App.css';
import Yelp from '../util/Yelp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar onTermChange={this.props.actions.requestBusinesses}
                   onLocationChange={this.props.actions.requestBusinesses}
                   handleSortByChange={this.props.actions.requestBusinesses} />
        {/* <BusinessList businesses={this.props.businesses} />
        <BusinessModal modalIsOpen={this.props.modalIsOpen}
                       selectedBusiness={this.props.selectedBusiness}
                       onRequestClose={ () => this.props.actions.closeModal() } /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    businesses: state.businesses.data,
    // modalIsOpen: state.modalIsOpen,
    // selectedBusiness: state.modal.selectedBusiness
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
