import React, { useCallback, useEffect, useState } from "react";
import styles from "./PostModal.module.scss";
import { Modal } from "../UI/Modal";
import { useModalContext } from "../../contexts/ModalContext";
import { OPEN_NEW_POST_MODAL, OPEN_POST } from "../../consts/nav";
import { Post } from "../UI/Post";
import { IPost } from "../../types/types";
import axios from "axios";

export const PostModal: React.FC = () => {
  const { modalType, context, setModalType } = useModalContext();

  const [post, setPost] = useState<IPost | null>(null);

  const open = modalType === OPEN_POST;

  const getPost = useCallback(() => {
    axios
      .get(`/api/post/${context.postId}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [context]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  const onClose = () => {
    setModalType("");
  };

  if (!context?.postId || !post) {
    return <></>;
  }

  return (
    <Modal open={open} onClose={onClose} classNames={styles.container}>
      <Post post={post} revalidate={getPost} />
    </Modal>
  );
};
