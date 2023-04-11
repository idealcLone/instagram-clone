import React from "react";

import styles from "./Header.module.scss";
import { Navigation } from "./Navigation";

export const Header: React.FC = () => {
  return (
    <aside className={styles.aside}>
      <Navigation />
    </aside>
  );
};
