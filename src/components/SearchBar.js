import React, {Component} from 'react';
import '../styles/App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
<<<<<<< HEAD
import {requestBusinesses} from '../actions/index';
=======
import {requestBusinesses} from "../actions/index";
>>>>>>> 37a77f782ac8cae0ce87cfa3ac14a9ecd4557500

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
<<<<<<< HEAD
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    //allows user to submit form with anchor tag rather than a button
=======
      term: "",
      location: "",
      sortBy: 'best_match',
    };

    // allows to submit form with anchor tag rather button
>>>>>>> 37a77f782ac8cae0ce87cfa3ac14a9ecd4557500
    this.handleSearch = this.handleSearch.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
    
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  onTermChange = e => {
    this.setState({term: e.target.value})
  }

  onLocationChange = e => {
    this.setState({location: e.target.value})
  }

  handleSortByChange(sortByOption) {
    console.log(sortByOption)
<<<<<<< HEAD
    this.setState({ sortBy: sortByOption });
  }

  handleSearch = e => {
    e.preventDefault();
    //fetch Yelp API by calling action creator
=======
    this.setState({ sortBy: sortByOption  })
    // this.props.handleSortByChange(sortByOption);
  }

  // getSortByClass(sortByOption){
  //   if(this.state.sortBy === sortByOption){
  //     return 'active';
  //   }
  //     return '';
  // }

  handleSearch = e => {
    e.preventDefault();
    // fetch Yelp API by calling action creator
>>>>>>> 37a77f782ac8cae0ce87cfa3ac14a9ecd4557500
    this.props.requestBusinesses(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
<<<<<<< HEAD
    //clear search fields
    this.setState({term: '', location: ''})
=======
    // clear search fields
    this.setState({term: '', location: ''})
    
>>>>>>> 37a77f782ac8cae0ce87cfa3ac14a9ecd4557500
  }

  renderSortByOptions(){
    return Object.keys(this.sortByOptions).map(sortByOption => {
      return(
        <li
<<<<<<< HEAD
          className={sortByOptionValue === this.state.sortBy ? 'active' : ''}
          key={sortByOptionValue}
          onClick={() => this.handleSortByChange(sortByOptionValue)}>
=======
          className={sortByOption === this.state.sortBy ? 'active' : ''}
          key={sortByOption}
          onClick={() => this.handleSortByChange(sortByOption)}>
>>>>>>> 37a77f782ac8cae0ce87cfa3ac14a9ecd4557500
            {sortByOption}
        </li>
      );
    });
  }

  render(){
    return(
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <form id="searchBar" onSubmit={this.handleSearch}>
          <div className="SearchBar-fields">
<<<<<<< HEAD
            <input
              placeholder="Search Businesses"
              value = {this.state.term}
              onChange={this.onTermChange} />
            <input
              placeholder="Where?"
              value = {this.state.location}
              onChange={this.onLocationChange} />
          </div>
          <div className="SearchBar-submit">
            <a onClick={this.handleSearch}>Let's Go</a>
          </div>
        </form>
=======
          <input
            placeholder="Search Businesses"
            value = {this.state.term}
            onChange={this.onTermChange} />
          <input
            placeholder="Where?"
            value = {this.state.location}
            onChange={this.onLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div></form>
       
>>>>>>> 37a77f782ac8cae0ce87cfa3ac14a9ecd4557500
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
<<<<<<< HEAD
    data: state.businesses
=======
    businesses: state.businesses
>>>>>>> 37a77f782ac8cae0ce87cfa3ac14a9ecd4557500
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({requestBusinesses}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
<<<<<<< HEAD
=======

>>>>>>> 37a77f782ac8cae0ce87cfa3ac14a9ecd4557500
