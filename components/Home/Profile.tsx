import React from "react";
import { Avatar } from "../UI/Avatar";
import styles from "./Profile.module.scss";
import { useUserContext } from "../../contexts/UserContext";

export const Profile: React.FC = () => {
  const { user } = useUserContext();

  console.log(user);

  return (
    <div className={styles.profile}>
      <Avatar size={"lg"} bordered />
      <div className={styles.info}>
        <div className={styles.username}>{user.username}</div>
      </div>
      <div className={styles.link}>Switch</div>
    </div>
  );
};
