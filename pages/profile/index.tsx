import { Avatar } from "../../components/UI/Avatar";
import styles from "./Profile.module.scss";
import Link from "next/link";
import React, { useState } from "react";
import { useModalContext } from "../../contexts/ModalContext";
import { OPEN_POST } from "../../consts/nav";

const Profile = () => {
  const { setModalType } = useModalContext();

  const [currentTab, setCurrentTab] = useState("Posts");

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <Avatar size={"xl"} />
        <div>
          <div className={styles.username__container}>
            <div className={styles.username}>username</div>
            <Link href={""} className={styles.edit}>
              Edit profile
            </Link>
          </div>
          <div className={styles.numbers}>
            <div>
              <strong>0</strong> posts
            </div>
            <div>
              <strong>4</strong> followers
            </div>
            <div>
              <strong>15</strong> following
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${
              currentTab === "Posts" && styles["tab--active"]
            }`}
            onClick={() => setCurrentTab("Posts")}
          >
            Posts
          </div>
          <div
            className={`${styles.tab} ${
              currentTab === "Saved" && styles["tab--active"]
            }`}
            onClick={() => setCurrentTab("Saved")}
          >
            Saved
          </div>
          <div
            className={`${styles.tab} ${
              currentTab === "Tagged" && styles["tab--active"]
            }`}
            onClick={() => setCurrentTab("Tagged")}
          >
            Tagged
          </div>
        </div>
        <div className={styles.posts}>
          {Array.from(Array(8).keys()).map((_, index) => (
            <div
              className={styles.image}
              key={index}
              onClick={() => setModalType(OPEN_POST)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
