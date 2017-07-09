import React from 'react';

import VideoListItem from '../video_list_item/video_list_item.js';

import './video_list.css';


const VideoList = ({videos}) => {

	const videoItems = videos.map( (video) => {
		return (
			<VideoListItem 
				video={video} 
				key={video.id} 
			/>
		)
	})	
	
	if(!videos) {
		return <div>Loading...</div>
	}

	return (
		<div className='video-list'>
			{videoItems}
		</div>
	)
}

export default VideoList;