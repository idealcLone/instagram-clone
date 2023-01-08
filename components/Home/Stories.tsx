import React from "react";

import styles from "./Stories.module.scss";
import { Story } from "./Story";

export const Stories: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.stories}>
        {Array(10)
          .fill(0)
          .map((story, index) => (
            <Story key={index} />
          ))}
      </ul>
    </div>
  );
};
