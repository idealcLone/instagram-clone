import React, { useState } from "react";

import styles from "./ImageGrid.module.scss";
import { ImageGridRow } from "./ImageGridRow";

export const ImageGrid: React.FC = () => {
  const [images, setImages] = useState([0, 1, 2]);

  return (
    <div className={styles.grid}>
      <ImageGridRow images={images} lgImagePosition={"end"} />
      <ImageGridRow images={images} />
      <ImageGridRow images={images} lgImagePosition={"front"} />
    </div>
  );
};
