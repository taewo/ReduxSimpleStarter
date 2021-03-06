import React from 'react';

const VideoDetail = ({video}) => {
  const videoId = video
  console.log(123, videoId);
  // const url = `http://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8 ">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" >
        </iframe>
      </div>
      <div className="details">
        <div>
          {video.snippet.title}
        </div>
        <div>
          {video.snippet.description}
        </div>
      </div>
    </div>
  )
};

export default VideoDetail;
