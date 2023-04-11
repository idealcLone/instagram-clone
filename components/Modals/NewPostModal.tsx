import React, { useState } from "react";
import styles from "./NewPostModal.module.scss";
import { Modal } from "../UI/Modal";
import { useModalContext } from "../../contexts/ModalContext";
import { OPEN_NEW_POST_MODAL, OPEN_SEARCH } from "../../consts/nav";
import { ImageUploader } from "../UI/ImageUploader";
import { Textarea } from "../UI/Textarea";

export const NewPostModal: React.FC = () => {
  const { modalType, setModalType } = useModalContext();
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [description, setDescription] = useState<string>("");

  const open = modalType === OPEN_NEW_POST_MODAL;

  const onClose = () => {
    setModalType("");
  };

  const handleImagesUpload = (images: File[]) => {
    setUploadedImages((prev) => [...prev, ...images]);
  };

  const handleImageRemove = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, ind) => ind !== index));
  };

  return (
    <Modal open={open} onClose={onClose} classNames={styles.modal}>
      <div className={styles.modal__post} onClick={onClose}>
        Post
      </div>
      <h2 className={styles.modal__heading}>Create new post</h2>
      <div className={styles.modal__divider} />
      <ImageUploader
        onUpload={handleImagesUpload}
        images={uploadedImages}
        onRemove={handleImageRemove}
      />
      {uploadedImages.length > 0 && (
        <div className={styles.modal__description}>
          <Textarea
            label={"Description"}
            name={"description"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      )}
    </Modal>
  );
};
