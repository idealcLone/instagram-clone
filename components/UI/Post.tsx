import React from "react";
import { Avatar } from "./Avatar";

import styles from "./Post.module.scss";
import Image from "next/image";

const actions = [
  { name: "Like", icon: "/icons/activity.svg", action: () => {} },
  { name: "Comment", icon: "/icons/comment.svg", action: () => {} },
  { name: "Share", icon: "/icons/share.svg", action: () => {} },
  { name: "Save", icon: "/icons/bookmark.svg", action: () => {} },
];

export const Post: React.FC = () => {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <Avatar size={"md"} bordered />
        <div className={styles.header__username}>username</div>
        <Image
          src="/icons/dots.svg"
          alt="Dots"
          className={styles.header__dots}
          width={24}
          height={24}
        />
      </header>
      <div className={styles.image}></div>
      <footer className={styles.footer}>
        <ul className={styles.footer__actions}>
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
          <div className={styles.likes}>1437 likes</div>
          <p className={styles.description}>
            <strong>username</strong>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aut deleniti eaque laborum omnis quam recusandae repellat sint sit
            temporibus.
          </p>
          <div className={styles.comments}>View all 100 comments</div>
          <div className={styles.time}>1 hour ago</div>
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
