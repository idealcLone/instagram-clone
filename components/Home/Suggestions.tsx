import React from "react";
import { Avatar } from "../UI/Avatar";

import styles from "./Suggestions.module.scss";

export const Suggestions: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Suggestions For You</h3>
        <div className={styles.seeAll}>See All</div>
      </div>
      <div className={styles.list}>
        {Array(5)
          .fill(0)
          .map((item, index) => (
            <div key={index} className={styles.suggestion}>
              <Avatar size={"md"} />
              <div className={styles.info}>
                <div>username</div>
                <div>Followed by username + 2 more</div>
              </div>
              <div className={styles.follow}>Follow</div>
            </div>
          ))}
      </div>
    </div>
  );
};
