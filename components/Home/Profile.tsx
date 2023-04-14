import React, { useEffect, useState } from "react";
import { Avatar } from "../UI/Avatar";
import styles from "./Profile.module.scss";
import { useUserContext } from "../../contexts/UserContext";
import { useRouter } from "next/router";
import { IPost } from "../../types/types";
import axios from "axios/index";

export const Profile: React.FC = () => {
  const router = useRouter();

  const { user } = useUserContext();

  return (
    <div className={styles.profile}>
      <Avatar size={"lg"} bordered />
      <div className={styles.info}>
        <div className={styles.username}>{user.username}</div>
      </div>
      <div className={styles.link} onClick={() => router.push("/auth")}>
        Switch
      </div>
    </div>
  );
};
