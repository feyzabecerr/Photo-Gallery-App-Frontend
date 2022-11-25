import React, { useState } from "react";
import { Fab, Card } from "@mui/material";
import { AddPhotoAlternate } from "@mui/icons-material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import classes from "./Styles.module.css";

function UploadImage() {
  const [image, setImage] = useState(null);

  const handleImage = (event) => {
    setImage(event.target.files[0]);
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    console.log([...formData.entries()]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", image);
    fetch("/images", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .catch((err) => console.log("error"));
  };

  return (
    <div>
      <Card className={classes.card}>
        <input
          className={classes.input}
          accept="image/*"
          id="contained-button-file"
          type="file"
          onChange={(i) => handleImage(i)}
        />
        <label htmlFor="contained-button-file">
          <Fab
            variant="extended"
            size="big"
            color="primary"
            component="span"
            style={{ position: "absolute", top: 40, left: 600 }}
          >
            <AddPhotoAlternate sx={{ mr: 1 }} />
            Dosya Seç
          </Fab>
        </label>

        <Fab
          variant="extended"
          size="big"
          color="primary"
          onClick={handleUpload}
          style={{ position: "absolute", top: 40, left: 850 }}
        >
          <UploadFileIcon sx={{ mr: 1 }} />
          Dosya Yükle
        </Fab>
      </Card>
    </div>
  );
}

export default UploadImage;
