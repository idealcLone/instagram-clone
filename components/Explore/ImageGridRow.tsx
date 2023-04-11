import React from "react";
import { Preview } from "../UI/Preview";
import styles from "./ImageGridRow.module.scss";

type Props = {
  images: any[];
  lgImagePosition?: "front" | "end";
};

export const ImageGridRow: React.FC<Props> = ({ images, lgImagePosition }) => {
  return (
    <div className={!!lgImagePosition ? styles.grid : styles.inline}>
      {images.map((image, index) => (
        <Preview
          key={image}
          className={`${styles.image} ${
            !!lgImagePosition &&
            ((lgImagePosition === "front" && index === 0) ||
              (lgImagePosition === "end" && index === 2))
              ? styles[`image--${lgImagePosition}`]
              : ""
          }`}
        />
      ))}
    </div>
  );
};
