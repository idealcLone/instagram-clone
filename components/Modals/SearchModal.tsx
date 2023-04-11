import React, { useState } from "react";
import { Modal } from "../UI/Modal";
import styles from "./SearchModal.module.scss";
import { Input } from "../UI/Input";
import { useModalContext } from "../../contexts/ModalContext";
import { OPEN_SEARCH } from "../../consts/nav";
import { Avatar } from "../UI/Avatar";

export const SearchModal: React.FC = () => {
  const { modalType, setModalType } = useModalContext();
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<string[]>(
    Array.from(Array(10).keys()).map((_, index) => `user-${index + 1}`)
  );

  const open = modalType === OPEN_SEARCH;

  const onClose = () => {
    setModalType("");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setResult((prev) =>
      prev
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
  };

  return (
    <Modal classNames={styles.modal} open={open} onClose={onClose}>
      <h2 className={styles.modal__heading}>Search</h2>
      <Input
        classNames={styles.modal__input}
        name={"searchQuery"}
        value={query}
        onChange={handleSearch}
        placeholder={"Search user"}
        type={"search"}
      />
      <ul className={styles.modal__result}>
        {result.map((user, index) => (
          <li key={user} className={styles.modal__user}>
            <Avatar size={"sm"} />
            <div>{user}</div>
          </li>
        ))}
      </ul>
    </Modal>
  );
};
