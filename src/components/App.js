import React from 'react';

import './App.css';

import Header from './header/header.js';
import Search from './search/search.js';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
