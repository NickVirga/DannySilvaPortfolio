import React from "react";
import imagesData from "../../assets/data/images.json"

function ProtectedPage() {



  return (
    <div>
      <h1>Protected Page </h1>
    {imagesData.map(image => (<img key={image.id} src={image.url} alt={image.caption} />))}
    </div>
  );
}

export default ProtectedPage;