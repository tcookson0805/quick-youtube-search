import React from 'react';

import './video_list_item.css';

const VideoListItem = ({video}) => {

	return (
		<div className='video-list-item'>
			<div>
				<img src={video.thumbnails.high.url} alt=""/>
			</div>
			<div className='video-list-item-text'>
				{video.title}
			</div>
				
		</div>
	)
}

export default VideoListItem;