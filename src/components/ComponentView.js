import React, {Component} from 'react';
import BusinessListing from './BusinessListing';
import BusinessList from './BusinessList';

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
      <div>
        <button onClick={this.toggleHidden.bind(this)} >Click to View Map</button>
        { this.state.isHidden ? <BusinessList /> : <BusinessListing />}
      </div>
    )
  }
}

export default ComponentView;
