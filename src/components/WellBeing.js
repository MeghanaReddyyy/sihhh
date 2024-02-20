import React, { useState, useEffect } from 'react';

export default function UserPage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('http://localhost:5000/getVideos');
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handlePlayVideo = (videoPath) => {
    // Implement your video playback logic here
    console.log(`Playing video: ${videoPath}`);
    // You can use a video player library or HTML5 video element to play the video
  };

  return (
    <div>
      <h2>User Page</h2>
      <div>
        {videos.map((video, index) => (
          <div key={index}>
            <video width="320" height="240" controls>
              <source src={`http://localhost:5000${video.videoPath}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button onClick={() => handlePlayVideo(video.videoPath)}>Play Video</button>
          </div>
        ))}
      </div>
    </div>
  );
}
