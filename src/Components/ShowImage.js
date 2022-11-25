import React, { useEffect, useState } from "react";
import classes from './Styles.module.css'

function ShowImage(props) {
  const [showImage, setShowImage] = useState(null);
  const { id } = props;

  useEffect(() => {
    const getImage = () => {
      fetch("/images/" + id, {
        method: "GET",
      })
        .then((res) => res.blob())
        .then((blob) => setShowImage(URL.createObjectURL(blob)))
        .catch((err) => console.log("error"));
    };

    getImage();
  }, [id]);

  return (
    <div className={classes.img}>
      <img src={showImage} alt="img" style={{ width: "100%" }} loading="lazy" />
    </div>
  );
}

export default ShowImage;
