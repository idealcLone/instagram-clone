import React from "react";
import { Suggestions } from "./Suggestions";
import { Profile } from "./Profile";
import styles from "./Sidebar.module.scss";

export const Sidebar: React.FC = () => {
  return (
    <aside className={styles.side}>
      <Profile />
      <Suggestions />
    </aside>
  );
};
