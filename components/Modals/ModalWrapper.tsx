import React from "react";
import { useModalContext } from "../../contexts/ModalContext";
import { OPEN_NEW_POST_MODAL, OPEN_POST, OPEN_SEARCH } from "../../consts/nav";
import { SearchModal } from "./SearchModal";
import { NewPostModal } from "./NewPostModal";
import { PostModal } from "./PostModal";

export const ModalWrapper: React.FC = () => {
  const { modalType } = useModalContext();

  const getModalByType = () => {
    switch (modalType) {
      case OPEN_SEARCH:
        return <SearchModal />;
      case OPEN_NEW_POST_MODAL:
        return <NewPostModal />;
      case OPEN_POST:
        return <PostModal />;
      default:
        return <></>;
    }
  };

  return getModalByType();
};
