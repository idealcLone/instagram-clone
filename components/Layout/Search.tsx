import React from "react";

import styles from "./Search.module.scss";
import Image from "next/image";

export const Search: React.FC = () => {
  return (
    <div className={styles.search}>
      <Image
        src="/icons/search.svg"
        className={styles.icon}
        alt="Search"
        width={18}
        height={18}
      />
      <input type="search" className={styles.input} />
    </div>
  );
};
