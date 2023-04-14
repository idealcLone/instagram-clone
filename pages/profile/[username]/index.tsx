import { Avatar } from "../../../components/UI/Avatar";
import styles from "./Profile.module.scss";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useModalContext } from "../../../contexts/ModalContext";
import { OPEN_POST } from "../../../consts/nav";
import { useUserContext } from "../../../contexts/UserContext";
import { IPost, User } from "../../../types/types";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const Profile = () => {
  const { setModalType } = useModalContext();
  const { user } = useUserContext();

  const [currentTab, setCurrentTab] = useState("Posts");
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const username = router.query.username;
  console.log(username);

  const getUser = () => {
    axios
      .get(`/api/users/${username}`)
      .then((res) => setCurrentUser(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    username && getUser();
  }, [username]);

  useEffect(() => {
    currentUser &&
      axios
        .get(`/api/posts/${currentUser.id}`)
        .then((res) => setPosts(res.data))
        .catch((err) => console.log(err));
  }, [currentUser]);

  if (!currentUser) {
    return <></>;
  }

  const onSubscribe = () => {
    setLoading(true);
    axios
      .post("/api/users/subscribe", { from: user.id, to: currentUser.id })
      .then((res) => getUser())
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const onUnsubscribe = () => {
    setLoading(true);
    axios
      .post("/api/users/unsubscribe", { from: user.id, to: currentUser.id })
      .then((res) => getUser())
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <Avatar size={"xl"} />
        <div>
          <div className={styles.username__container}>
            <div className={styles.username}>{currentUser.username}</div>
            {currentUser.id !== user.id &&
              (currentUser.followers.includes(user.id) ? (
                <div
                  className={styles.unsubscribe}
                  onClick={!loading ? onUnsubscribe : () => {}}
                >
                  Unsubscribe
                </div>
              ) : (
                <div
                  className={styles.subscribe}
                  onClick={!loading ? onSubscribe : () => {}}
                >
                  Subscribe
                </div>
              ))}
          </div>
          <div className={styles.numbers}>
            <div>
              <strong>{posts.length}</strong> posts
            </div>
            <div>
              <strong>{currentUser.followers.length}</strong> followers
            </div>
            <div>
              <strong>{currentUser.following.length}</strong> following
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
        </div>
        <div className={styles.posts}>
          {posts.map((post, index) => (
            <div
              className={styles.image}
              key={index}
              onClick={() => setModalType(OPEN_POST, { postId: post.id })}
            >
              <Image src={post.image} alt={`post_${post.id}`} fill />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
