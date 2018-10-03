import React from 'react';
// import BusinessList from '../components/BusinessList';
// import BusinessModal from '../components/BusinessModal';
import SearchBar from '../components/SearchBar';
import BusinessTemp from '../components/BusinessTemp';
import '../styles/App.css';
import Yelp from '../util/Yelp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       businesses: [],
//       selectedBusiness: null,
//       modalIsOpen: false
//     };
//     this.handleTermChange = this.handleTermChange.bind(this);
//     this.handleLocationChange = this.handleLocationChange.bind(this);
//     this.searchYelp = this.searchYelp.bind(this);
//   }
//
  // searchYelp(term, location, sortBy) {
  //   Yelp.search(term, location, sortBy).then(businesses => {
  //     this.setState({
  //       businesses: businesses
  //     });
  //   });
  //   console.log(term, location, sortBy);
  // }

//
//   handleTermChange = (term) => {
//     console.log(term);
//   };
//
//   handleLocationChange = (location) => {
//     console.log(location);
//   };
//
//   openModal(business) {
//     this.setState({
//       modalIsOpen: true,
//       selectedBusiness: business
//     });
//   }
//
//   closeModal() {
//     this.setState({
//       modalIsOpen: false,
//       selectedBusiness: null
//     });
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <h1>ravenous</h1>
//         <SearchBar onTermChange={this.handleTermChange}
//                    onLocationChange={this.handleLocationChange}
//                    searchYelp={this.searchYelp} />
//         <BusinessList businesses={this.state.businesses}
//                       onBusinessSelect={selectedBusiness => this.openModal(selectedBusiness)} />
//         <BusinessModal modalIsOpen={this.state.modalIsOpen}
//                        selectedBusiness={this.state.selectedBusiness}
//                        onRequestClose={ () => this.closeModal() } />
//       </div>
//     );
//   }
// }
//
// export default App;
class App extends React.Component {
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({
        businesses: businesses
      });
    });
    console.log(term, location, sortBy);
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar onTermChange={this.props.actions.requestBusinesses}
                   onLocationChange={this.props.actions.requestBusinesses}
                   handleSortByChange={this.props.actions.requestBusinesses}
                   searchYelp={this.props.actions.searchYelp} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    businesses: state.businesses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
