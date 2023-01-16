import React from "react";
import { Avatar } from "../UI/Avatar";
import styles from "./Profile.module.scss";

export const Profile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <Avatar size={"lg"} bordered />
      <div className={styles.info}>
        <div className={styles.username}>username</div>
        <div className={styles.fullName}>full name</div>
      </div>
      <div className={styles.link}>Switch</div>
    </div>
  );
};
