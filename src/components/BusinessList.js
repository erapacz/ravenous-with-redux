import React, {Component} from 'react';
import Business from './Business';
import '../styles/App.css';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';
import {bindActionCreators} from 'redux';

class BusinessList extends Component {
  render() {
    const list = this.props.data.businesses.map((business) => {
      return <Business key={business.id}
                       business={business}
                       onBusinessSelect={selectedBusiness => this.props.actions.openModal({selectedBusiness})} />
    });

    return (
      <div className="BusinessList">{list}</div>

    );
  }
}


function mapStateToProps(state) {
  return {
    data: state.businesses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessList);
