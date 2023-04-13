import React, { createContext, useContext, useState } from "react";
import { User } from "../types/types";

const INITIAL_USER: User = {
  id: 0,
  username: "",
  password: "",
  followers: [],
  following: [],
};

const UserContext = createContext({
  user: INITIAL_USER,
  setUser: (user: User) => {},
});

export const useUserContext = () => useContext(UserContext);

type PropsType = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<PropsType> = ({ children }) => {
  const [user, setUser] = useState<User>(INITIAL_USER);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
