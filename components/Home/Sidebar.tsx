import React from "react";
import { Suggestions } from "./Suggestions";
import { Profile } from "./Profile";
import styles from "./Sidebar.module.scss";
import { SideLinks } from "./SideLinks";

export const Sidebar: React.FC = () => {
  return (
    <aside className={styles.side}>
      <Profile />
      <Suggestions />
      <SideLinks />
    </aside>
  );
};
