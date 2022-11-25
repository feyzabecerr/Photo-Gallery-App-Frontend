import React from "react";
import { useState, useEffect } from "react";
import ShowImage from "./ShowImage";
import { ImageList, ImageListItem } from "@mui/material";

function GalleryView() {
  const [error, setError] = useState(null);
  const [imageList, setImageList] = useState([]);

  const fetchImages = () => {
    fetch("/images")
      .then((res) => res.json())
      .then(
        (result) => {
          setImageList(result);
        },
        (error) => {
          setError(error);
        }
      );
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div style={{
        cursor:"pointer",
        margin:'10px'
    }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {imageList.map((file, index) => (
          <ImageListItem>
            <ShowImage key={index} id={file.id} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default GalleryView;
