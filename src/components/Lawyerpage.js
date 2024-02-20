import React, { useState } from "react";
import axios from "axios";

function Lawyerpage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageUpload = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", selectedImage);

    axios
      .post("http://localhost:3001/api/upload", formData) // Adjust the URL as needed
      .then((response) => {
        alert(response.data.message);
        setTitle("");
        setDescription("");
        setSelectedImage(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleImageUpload}>Upload Image</button>
      </div>
    </div>
  );
}

export default Lawyerpage;
