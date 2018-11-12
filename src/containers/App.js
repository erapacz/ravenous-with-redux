import React from 'react';
import ComponentView from '../components/ComponentView';
import BusinessModal from '../components/BusinessModal';
import SearchBar from '../components/SearchBar';
import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <ComponentView />
        <BusinessModal />
      </div>
    );
  }
}

export default App;
