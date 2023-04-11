import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext({
  modalType: "",
  setModalType: (modalType: string) => {},
});

export const useModalContext = () => useContext(ModalContext);

type Props = {
  children: React.ReactNode;
};

export const ModalProvider: React.FC<Props> = ({ children }) => {
  const [modalType, setModalType] = useState<string>("");

  return (
    <ModalContext.Provider value={{ modalType, setModalType }}>
      {children}
    </ModalContext.Provider>
  );
};
