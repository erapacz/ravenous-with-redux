import React, {Component} from 'react';
import '../styles/App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {requestBusinesses} from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    //allows user to submit form with anchor tag rather than a button
    this.handleSearch = this.handleSearch.bind(this);

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
    this.setState({ sortBy: sortByOption });
  }

  handleSearch = e => {
    e.preventDefault();
    //fetch Yelp API by calling action creator
    this.props.requestBusinesses(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
    //clear search fields
    this.setState({term: '', location: ''})
  }

  renderSortByOptions(){
    return Object.keys(this.sortByOptions).map(sortByOption => {
      return(
        <li
          className={sortByOption === this.state.sortBy ? 'active' : ''}
          key={sortByOption}
          onClick={() => this.handleSortByChange(sortByOption)}>
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
  return bindActionCreators({requestBusinesses}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
