import React, { useState } from "react";

const Courses = () => {
  const [videos] = useState([
    {
      videoId: 1,
      title: "Sample Video 1",
      videoSrc: "C:\\Users\\Meghanareddy\\OneDrive\\Desktop\\justicegateway\\src\\components\\uploads\\v1.mp4"
    },
    
    
  ]);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const playVideo = (videoId) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div>
      <h1>Video List</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.videoId}>
            <button onClick={() => playVideo(video.videoId)}>
              {video.title}
            </button>
          </li>
        ))}
      </ul>
      {selectedVideo && (
        <div>
          <button onClick={closeVideo}>Close Video</button>
          <video
            controls
            width="100%"
            height="400px"
            src={videos.find((v) => v.videoId === selectedVideo).videoSrc}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default Courses;
