import React from 'react';
import BusinessList from '../components/BusinessList';
// import BusinessModal from '../components/BusinessModal';
import SearchBar from '../components/SearchBar';
import GoogleMap from '../components/GoogleMap';
import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
        <GoogleMap />
        {/*<BusinessModal modalIsOpen={this.props.modalIsOpen}
                       selectedBusiness={this.props.selectedBusiness}
                       onRequestClose={ () => this.props.actions.closeModal() } /> */}
      </div>
    );
  }
}

export default App;
