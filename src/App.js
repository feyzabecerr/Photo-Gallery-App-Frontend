import { useState} from "react";
import UploadImage from "./Components/UploadImage";
import { Fab } from "@mui/material";
import CollectionsIcon from "@mui/icons-material/Collections";
import GalleryView from "./Components/GalleryView";

function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div>
      <UploadImage />
      <Fab
        variant="extended"
        size="big"
        color="primary"
        onClick={handleClick}
        style={{ position: "absolute", top: 40, left: 350 }}
      >
        <CollectionsIcon sx={{ mr: 1 }} />
        Galeri
      </Fab>
      {isShown && <GalleryView />}
    </div>
  );
}

export default App;
