import React, { useEffect } from "react";
import { Header } from "./Header";
import { Roboto } from "@next/font/google";
import styles from "./Header.module.scss";
import { useUserContext } from "../../contexts/UserContext";
import { useRouter } from "next/router";

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { user } = useUserContext();

  useEffect(() => {
    if (user.id < 0) {
      router.push("/auth");
    }
  }, [user]);

  return (
    <div className={styles.layout}>
      <Header />
      <main className={`container ${roboto.className}`}>{children}</main>
    </div>
  );
};
