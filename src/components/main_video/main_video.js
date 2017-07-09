import React from 'react';

import './main_video.css';

const MainVideo = ({selectedVideo}) => {

	if(!selectedVideo) {
		return <div>Loading ...</div>
	}

  const url = `https://www.youtube.com/embed/${selectedVideo.id}`;
	return (
		<div className="main-video">

			<iframe 
				src={url} 
				frameBorder='1'
				title='something'
			>
			</iframe>

			<div className="main-video-title">
				{selectedVideo.title}
			</div>
		</div>
	)
}

export default MainVideo;