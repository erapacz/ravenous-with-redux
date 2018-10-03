import React from 'react';
import '../styles/App.css';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sortBy: 'best_match'
    };

    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  onTermChange(term) {
    this.props.onTermChange(term);
  }

  onLocationChange(location) {
    this.props.onLocationChange(location);
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
    this.props.handleSortByChange(sortByOption);
  }

  getSortByClass(sortByOption){
    if(this.state.sortBy === sortByOption){
      return 'active';
    }
      return '';
  }

  handleSearch(event) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
    event.preventDefault();
  }

  renderSortByOptions(){
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return(
        <li
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={event => this.handleSortByChange(sortByOptionValue)}>
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
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={event => this.onTermChange(event.target.value)} />
          <input
            placeholder="Where?"
            onChange={event => this.onLocationChange(event.target.value)} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
