import React from "react";
import { Avatar } from "../UI/Avatar";

import styles from "./Story.module.scss";

export const Story: React.FC = () => {
  return (
    <div className={styles.story}>
      <Avatar size={"lg"} bordered />
    </div>
  );
};
