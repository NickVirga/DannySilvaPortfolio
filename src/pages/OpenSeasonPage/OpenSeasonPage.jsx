import React, { useState, useEffect } from "react";
import axios from "axios";

import "./OpenSeasonPage.sass";

function OpenSeasonPage() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [imageDataArray, setImageDataArray] = useState([]);
  const [error, setError] = useState(null);

  const handlePasswordSubmit = async () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const imagePaths = [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "8(9).png",
      "9.jpg",
      "10.png",
      "11.jpg",
      "12.png",
      "13.png",
      "14.jpg",
      "15.png",
      "16.jpg",
      "17.png",
      "18.jpg",
      "19.png",
      "20.jpg",
      "21.png",
      "22.jpg",
      "23.png",
      "24.png",
      "25.jpg",
      "26.jpg",
    ];

    try {
      const responses = await Promise.all(
        imagePaths.map(async (imagePath) => {
          const imageUrl = `${baseUrl}/${imagePath}`;
          return axios.get(imageUrl, {
            headers: {
              Authorization: password,
            },
            responseType: "blob",
          });
        })
      );

      const imageDataArray = responses.map((response) => {
        return URL.createObjectURL(response.data);
      });

      setImageDataArray(imageDataArray);

      setIsAuthorized(true);
      setError(null);
    } catch (error) {
      setError("Unauthorized");
    }
  };

  if (!isAuthorized) {
    return (
      <div className="open-season__prompt-container">
        <div className="open-season__prompt">
          <p className="open-season__instruction">Enter Password</p>
          <input
            className="open-season__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="open-season__btn" onClick={handlePasswordSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="open-season">
      <div className="open-season__gallery">
        {imageDataArray.map((imageData, index) => (
          <img
            className="open-season__image"
            key={index}
            src={imageData}
            alt={`Image ${index + 1}`}
            // onClick={}
          />
        ))}
      </div>
    </section>
  );
}

export default OpenSeasonPage;
