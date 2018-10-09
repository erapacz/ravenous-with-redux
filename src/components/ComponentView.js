import React, {Component} from 'react';
import BusinessListing from './BusinessListing';
import BusinessList from './BusinessList';
import * as Actions from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ComponentView extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHidden: true
    }
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }


  render() {
    return (
      <div className="">
        <button onClick={this.toggleHidden.bind(this)}>{this.state.isHidden ? 'Click to View Map' : 'Click to Close Map'}</button>
        { this.state.isHidden ? <BusinessList onBusinessSelect={ selectedBusiness => this.props.actions.openModal({selectedBusiness}) }/> : <BusinessListing />}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ComponentView);
