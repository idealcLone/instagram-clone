import React from "react";

import styles from "./Feed.module.scss";
import { Post } from "../UI/Post";

export const Feed: React.FC = () => {
  return (
    <div className={styles.container}>
      {Array(5)
        .fill(0)
        .map((item, index) => (
          <Post key={index} />
        ))}
    </div>
  );
};
