import React, { useEffect, useState } from "react";
import axios from "axios";

import "./ProtectedImage.sass"

const ProtectedImage = ({ id, alt, url, fcnId}) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const getImage = async () => {
      if (!!sessionStorage.authToken) {
        const token = sessionStorage.authToken;

        const endpoint = fcnId === 1
  ? `/.netlify/functions/protectImage?id=${id}`
  : `/.netlify/functions/protectImage2?id=${id}`;

        try {
          const response = await axios(endpoint, {
            headers: {
              Authorization: `Bearer ${token}`,
              url: url
            },
            responseType: "blob"
          });

            const objectURL = URL.createObjectURL(response.data);
            setImageSrc(objectURL);

        } catch (error) {
          console.error("Error fetching image:", error);
        }
      } else {
        console.error("No session token found:");
      }
    };

    getImage();
  }, [id]);

  return <img className="protected__image" src={imageSrc} alt={alt} />;
};

export default ProtectedImage;
