import React from "react";
import styles from "./Modal.module.scss";
import { Portal } from "./Portal";

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  classNames?: string;
};

export const Modal: React.FC<Props> = ({
  children,
  open,
  onClose,
  classNames = "",
}) => {
  return open ? (
    <Portal>
      <div className={styles.modal}>
        <div onClick={onClose} className={styles.backdrop} />
        <div className={`${styles.body} ${classNames}`}>{children}</div>
      </div>
    </Portal>
  ) : (
    <></>
  );
};
