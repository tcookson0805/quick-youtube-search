import React from 'react';
import YouTubeSearch from 'youtube-search';
import _ from 'lodash';

import './App.css';
import API_KEY from '../config/config.js'

import Header from './header/header.js';
import Search from './search/search.js';
import MainVideo from './main_video/main_video.js';
import VideoList from './video_list/video_list.js';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		}
		this.videoSearch = this.videoSearch.bind(this);
	}

	videoSearch(term) {
		YouTubeSearch(term, {maxResults: 9, key: API_KEY}, (err, results) => {
			if(err) {
				console.log(err)
			}
			console.log(results)
			this.setState({
				videos: results,
				selectedVideo: results[0]
			})
		})
	}



	componentDidMount() {
		this.videoSearch('baseball');
	}

  render() {

  	const videoSearch = _.debounce( (term) => {this.videoSearch(term)}, 500)
    return (
      <div className='App'>
        <Header />
        <Search onSearchChange={videoSearch}/>
        <MainVideo selectedVideo={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
