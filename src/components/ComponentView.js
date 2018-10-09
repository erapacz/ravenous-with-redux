import React, {Component} from 'react';
import BusinessListing from './BusinessListing';
import BusinessList from './BusinessList';
import {connect} from 'react-redux';

class ComponentView extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHidden: true,
      businesses: []
    }
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <div>
        { this.props.data.businesses.length === 0 ? <div></div> : <button onClick={this.toggleHidden.bind(this)}>{this.state.isHidden ? 'Click to View Map' : 'Click to Close Map'}</button>  }
        { this.state.isHidden ? <BusinessList /> : <BusinessListing />}
        {console.log(this.state.businesses)}
        {console.log(this.props.data.businesses)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.businesses,
  };
}

export default connect(mapStateToProps)(ComponentView);
