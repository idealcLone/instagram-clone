import React, { useState } from "react";
import styles from "./PostModal.module.scss";
import { Modal } from "../UI/Modal";
import { useModalContext } from "../../contexts/ModalContext";
import { OPEN_NEW_POST_MODAL, OPEN_POST } from "../../consts/nav";
import { Post } from "../UI/Post";

export const PostModal: React.FC = () => {
  const { modalType, setModalType } = useModalContext();

  const open = modalType === OPEN_POST;

  const onClose = () => {
    setModalType("");
  };

  return (
    <Modal open={open} onClose={onClose} classNames={styles.container}>
      <Post />
    </Modal>
  );
};
