import React from "react";
import styles from "./Textarea.module.scss";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  placeholder?: string;
  classNames?: string;
  label?: string;
};

export const Textarea: React.FC<Props> = ({
  value,
  onChange,
  name,
  placeholder,
  classNames,
  label,
}) => {
  return (
    <div className={styles.container}>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        className={`${styles.input} ${classNames}`}
        placeholder={placeholder}
        value={value}
        name={name}
        id={name}
        onChange={onChange}
      />
    </div>
  );
};
