import React from "react";

import styles from "./Header.module.scss";
import Image from "next/image";
import { Navigation } from "./Navigation";
import { Search } from "./Search";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Image src={"/icons/logo.svg"} alt="Logo" height={30} width={100} />
        <Search />
        <Navigation />
      </div>
    </header>
  );
};
