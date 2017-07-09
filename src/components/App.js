import React from 'react';

import './App.css';
import API_KEY from '../../config/config.js'

import Header from './header/header.js';
import Search from './search/search.js';
import MainVideo from './main_video/main_video.js';
import VideoList from './video_list/video_list.js';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Search />
        <MainVideo />
        <VideoList />
      </div>
    );
  }
}

export default App;
