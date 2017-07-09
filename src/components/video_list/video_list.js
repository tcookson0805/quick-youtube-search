import React from 'react';

import VideoListItem from '../video_list_item/video_list_item.js';

import './video_list.css';

var videoNames = ['video1', 'video2', 'video3']

const VideoList = () => {
	return (
		<div className='video-list'>
			{ videoNames.map( (name, index) => {
				return <VideoListItem name={name} key={index} />
			})
			}
		</div>
	)
}

export default VideoList;