import React from "react";
import { Avatar } from "./Avatar";

import styles from "./Post.module.scss";
import Image from "next/image";
import { IPost } from "../../types/types";
import axios from "axios";
import { useUserContext } from "../../contexts/UserContext";

const actions = [
  { name: "Comment", icon: "/icons/comment.svg", action: () => {} },
  { name: "Share", icon: "/icons/share.svg", action: () => {} },
  { name: "Save", icon: "/icons/bookmark.svg", action: () => {} },
];

type Props = {
  post: IPost;
  revalidate?: () => void;
};

export const Post: React.FC<Props> = ({ post, revalidate }) => {
  const { user } = useUserContext();

  if (!post) {
    return <></>;
  }

  const handleLike = () => {
    axios
      .post(`/api/post/${post.id}/like`, { userId: user.id })
      .then(() => revalidate?.())
      .catch((err) => console.log(err));
  };

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <Avatar size={"md"} bordered />
        <div className={styles.header__username}>{post.user?.username}</div>
        <Image
          src="/icons/dots.svg"
          alt="Dots"
          className={styles.header__dots}
          width={24}
          height={24}
        />
      </header>
      <div className={styles.image}>
        <Image
          className={styles.imageContent}
          src={post.image}
          alt={`Image_${post.id}`}
          fill
        />
      </div>
      <footer className={styles.footer}>
        <ul className={styles.footer__actions}>
          <li key={"Like"} onClick={handleLike}>
            <Image
              src={
                post.likes?.includes(user.id)
                  ? "/icons/activity-active.svg"
                  : "/icons/activity.svg"
              }
              alt={"Like"}
              width={24}
              height={24}
            />
          </li>
          {actions.map((action) => (
            <li key={action.name}>
              <Image
                src={action.icon}
                alt={action.name}
                width={24}
                height={24}
              />
            </li>
          ))}
        </ul>
        <div className={styles.body}>
          {post.likes?.length > 0 && (
            <div className={styles.likes}>{`${post.likes.length} likes`}</div>
          )}
          <p className={styles.description}>
            <strong>{post.user?.username}</strong>
            {post.description}
          </p>
          <div className={styles.addComment}>
            <Image src="/icons/emoji.svg" alt="Emoji" width={24} height={24} />
            <input type="text" placeholder={"Add a comment..."} />
            <div>Post</div>
          </div>
        </div>
      </footer>
    </article>
  );
};
