import React from 'react';

import './video_list_item.css';

const VideoListItem = (props) => {
	return (
		<div className='video-list-item'>
			{props.name}
		</div>
	)
}

export default VideoListItem;