import React, { useState } from "react";
import styles from "./NewPostModal.module.scss";
import { Modal } from "../UI/Modal";
import { useModalContext } from "../../contexts/ModalContext";
import { OPEN_NEW_POST_MODAL, OPEN_SEARCH } from "../../consts/nav";
import { ImageUploader } from "../UI/ImageUploader";
import { Textarea } from "../UI/Textarea";
import axios from "axios";
import FormData from "form-data";
import { useUserContext } from "../../contexts/UserContext";

export const NewPostModal: React.FC = () => {
  const { user } = useUserContext();
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

  const onPost = async () => {
    if (user.id > 0) {
      const image = uploadedImages[0];
      const filename = encodeURI(image.name);
      const res = await fetch(`/api/images/upload?file=${filename}`);
      const data = await res.json();

      const formData = new FormData();

      Object.entries({ ...data.fields, file: image }).forEach(
        ([key, value]) => {
          formData.append(key, value);
        }
      );

      axios
        .post(data.url, formData)
        .then((res) => {
          const imageUrl = `https://myawsbucket-em.s3.eu-central-1.amazonaws.com/${filename}`;
          axios
            .post("/api/posts/create", {
              description,
              image: imageUrl,
              author: user.id,
            })
            .then(() => {
              onClose();
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Modal open={open} onClose={onClose} classNames={styles.modal}>
      <div className={styles.modal__post} onClick={onPost}>
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
