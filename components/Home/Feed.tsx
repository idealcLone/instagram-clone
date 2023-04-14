import React, { useCallback, useEffect, useState } from "react";

import styles from "./Feed.module.scss";
import { Post } from "../UI/Post";
import { IPost } from "../../types/types";
import axios from "axios";
import { useUserContext } from "../../contexts/UserContext";

export const Feed: React.FC = () => {
  const { user } = useUserContext();

  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = useCallback(() => {
    user.id > -1 &&
      axios
        .get(`/api/posts/${user.id}/feed`)
        .then((res) => setPosts(res.data))
        .catch((err) => console.log(err));
  }, [user]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className={styles.container}>
      {posts.map((post, index) => (
        <Post key={index} post={post} revalidate={getPosts} />
      ))}
    </div>
  );
};
