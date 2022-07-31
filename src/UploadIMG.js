import React, { useState } from "react";

function UploadIMG() {

    const [url, setUrl] = useState("");

    const handleImageUpload = (file) => {
        const img = file[0];
        const url = URL.createObjectURL(img);
        setUrl(url);
    }

    const styles = {
        "width": "450px",
        "height": "300px"
    }

  return (
    <div>
        <input onChange={(e) => handleImageUpload(e.target.files)} type="file" accept="image/*"/>
        <input type="image" src={url} style={styles} />
    </div>
  );
}

export default UploadIMG;
