import React from "react";
import styles from "./Input.module.scss";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
  placeholder?: string;
  classNames?: string;
};

export const Input: React.FC<Props> = ({
  value,
  onChange,
  name,
  type = "text",
  placeholder,
  classNames,
}) => {
  return (
    <input
      className={`${styles.input} ${classNames}`}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      id={name}
      onChange={onChange}
    />
  );
};
