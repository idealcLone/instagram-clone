import React, { useRef, useState } from "react";
import styles from "./ImageSlider.module.scss";
import Image from "next/image";

type Props = {
  images: File[];
  onRemove: (index: number) => void;
};

export const ImageSlider: React.FC<Props> = ({ onRemove, images }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const slideTo = (index: number) => {
    if (index < 0 || index + 1 > images.length) {
      return;
    }

    if (sliderRef.current) {
      sliderRef.current.style.translate = `-${index * 100}% 0`;
    }
    setCurrentImageIndex(index);
  };

  const handleRemove = () => {
    slideTo(
      currentImageIndex > 0 ||
        currentImageIndex !== 1 ||
        currentImageIndex + 2 !== images.length
        ? currentImageIndex - 1
        : currentImageIndex + 1
    );
    setTimeout(() => {
      onRemove(currentImageIndex);
    }, 200);
  };

  return (
    <div className={styles.container}>
      {currentImageIndex > 0 && (
        <div
          className={`${styles.arrow} ${styles.arrow__left}`}
          onClick={() => slideTo(currentImageIndex - 1)}
        >
          &larr;
        </div>
      )}
      <div className={styles.slider} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={image.lastModified + index} onClick={handleRemove}>
            <Image
              src={URL.createObjectURL(image)}
              fill
              alt={"Uploaded image"}
            />
          </div>
        ))}
      </div>
      {currentImageIndex < images.length - 1 && (
        <div
          className={`${styles.arrow} ${styles.arrow__right}`}
          onClick={() => slideTo(currentImageIndex + 1)}
        >
          &rarr;
        </div>
      )}
    </div>
  );
};
