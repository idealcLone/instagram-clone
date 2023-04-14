import React, { useRef } from "react";
import { Button } from "./Button";
import { ImageSlider } from "./ImageSlider";
import styles from "./ImageUploader.module.scss";

type Props = {
  images: File[];
  onUpload: (images: File[]) => void;
  onRemove: (index: number) => void;
  multiple?: boolean;
};

export const ImageUploader: React.FC<Props> = ({
  images,
  onUpload,
  onRemove,
  multiple = false,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const images = files ? Array.from(files) : ([] as File[]);
    onUpload(images);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className={styles.uploader}>
      <input
        type="file"
        accept={".jpeg,.png,.jpg"}
        ref={inputRef}
        onChange={handleUpload}
        hidden
        multiple={multiple}
      />
      {images.length > 0 ? (
        <ImageSlider images={images} onRemove={onRemove} />
      ) : (
        <>
          <div className={styles.text}>Upload images here</div>
          <Button onClick={() => inputRef.current?.click()}>
            Select from computer
          </Button>
        </>
      )}
    </div>
  );
};
