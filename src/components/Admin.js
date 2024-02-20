import React, { useState } from 'react';

export default function Admin() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please choose a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('video', selectedFile);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      alert(`Video uploaded successfully! Path: ${data.videoPath}`);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div>
      <h2>Upload the Rehabilitation Videos</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Video</button>
    </div>
  );
}

