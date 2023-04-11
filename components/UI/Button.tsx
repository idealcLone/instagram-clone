import React from "react";
import styles from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  classNames?: string;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({
  children,
  classNames = "",
  onClick,
}) => {
  return (
    <div className={`${styles.btn} ${classNames}`} onClick={onClick}>
      {children}
    </div>
  );
};
