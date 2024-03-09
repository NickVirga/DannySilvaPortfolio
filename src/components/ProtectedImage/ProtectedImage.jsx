import React, { useEffect, useState } from "react";
import axios from "axios";

import "./ProtectedImage.sass"

const ProtectedImage = ({ id, alt, url }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const getImage = async () => {
      if (!!sessionStorage.authToken) {
        const token = sessionStorage.authToken;

        try {
          const response = await axios(`/.netlify/functions/protectImage?id=${id}`, {
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
