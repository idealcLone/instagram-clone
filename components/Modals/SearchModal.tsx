import React, { useEffect, useState } from "react";
import { Modal } from "../UI/Modal";
import styles from "./SearchModal.module.scss";
import { Input } from "../UI/Input";
import { useModalContext } from "../../contexts/ModalContext";
import { OPEN_SEARCH } from "../../consts/nav";
import { Avatar } from "../UI/Avatar";
import axios from "axios";
import { User } from "../../types/types";
import Link from "next/link";
import { useUserContext } from "../../contexts/UserContext";

export const SearchModal: React.FC = () => {
  const { user: currentUser } = useUserContext();
  const { modalType, setModalType } = useModalContext();

  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<User[]>([]);

  const open = modalType === OPEN_SEARCH;

  useEffect(() => {
    axios
      .get(`/api/users`, { params: { search: query } })
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));
  }, [query]);

  const onClose = () => {
    setModalType("");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Modal classNames={styles.modal} open={open} onClose={onClose}>
      <h2 className={styles.modal__heading}>Search</h2>
      <Input
        classNames={styles.modal__input}
        name={"searchQuery"}
        value={query}
        onChange={handleSearch}
        placeholder={"Search users"}
        type={"search"}
      />
      <ul className={styles.modal__result}>
        {result.map(
          (user, index) =>
            user.id !== currentUser.id && (
              <li key={user.id}>
                <Link
                  href={`/profile/${user.username}`}
                  className={styles.modal__user}
                  onClick={onClose}
                >
                  <Avatar size={"sm"} />
                  <div>{user.username}</div>
                </Link>
              </li>
            )
        )}
      </ul>
    </Modal>
  );
};
