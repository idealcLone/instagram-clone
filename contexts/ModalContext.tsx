import React, { createContext, useContext, useState } from "react";

const INITIAL_MODAL_STATE = {
  type: "",
  context: {},
};

const ModalContext = createContext({
  modalType: "",
  context: {} as any,
  setModalType: (modalType: string, context?: any) => {},
});

export const useModalContext = () => useContext(ModalContext);

type Props = {
  children: React.ReactNode;
};

export const ModalProvider: React.FC<Props> = ({ children }) => {
  const [modal, setModal] = useState(INITIAL_MODAL_STATE);

  const setModalType = (type: string, context?: any) => {
    setModal({ type, context });
  };

  return (
    <ModalContext.Provider
      value={{ modalType: modal.type, context: modal.context, setModalType }}
    >
      {children}
    </ModalContext.Provider>
  );
};
