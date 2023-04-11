import React from "react";

import styles from "./Avatar.module.scss";

import Image from "next/image";

type Props = {
  size?: "sm" | "md" | "lg" | "xl";
  bordered?: boolean;
  src?: string;
};

export const Avatar: React.FC<Props> = ({
  size = "sm",
  bordered = false,
  src,
}) => {
  return (
    <div className={`${styles.container} ${styles[`container--${size}`]}`}>
      <div className={styles.avatar}>
        {src && <Image src={src} alt={"Avatar"} />}
      </div>
      {bordered && (
        <>
          <div className={`${styles.border} ${styles["border--1"]}`} />
          <div className={`${styles.border} ${styles["border--2"]}`} />
        </>
      )}
    </div>
  );
};
