import React, {Component} from 'react';
import Business from './Business';
import '../styles/App.css';
import {connect} from 'react-redux';

class BusinessList extends Component {
  render() {
    const list = this.props.data.businesses.map((business) => {
      return <Business key={business.id}
                       business={business}
                       onBusinessSelect={this.props.onBusinessSelect} />
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

export default connect(mapStateToProps)(BusinessList);
