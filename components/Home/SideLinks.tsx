import React from "react";
import { links } from "../../consts/links";
import styles from "./SideLinks.module.scss";

export const SideLinks: React.FC = () => {
  return (
    <ul className={styles.links}>
      {links.map((link) => (
        <li key={link.path} className={styles.link}>
          {link.name}
        </li>
      ))}
    </ul>
  );
};
