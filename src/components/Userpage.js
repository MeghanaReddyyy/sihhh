import React, { useState, useEffect } from "react";
import axios from "axios";

function Userpage() {
  const [data, setData] = useState([]);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    // Fetch data and images from the server when the component mounts
    axios
      .get("http://localhost:3001/api/data") // Adjust the URL as needed
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:3001/api/images") // Adjust the URL as needed
      .then((response) => {
        setImageData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>Title: {item.title}</p>
            <p>Description: {item.description}</p>
          
            <img
              src={`data:image/jpeg;base64,${imageData[index]}`} // Assuming the images are in JPEG format
              alt={`Image ${index}`}
              className="w-25"
              style={{flex:1}}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Userpage;
