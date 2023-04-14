import React from "react";

import styles from "./Header.module.scss";
import { Navigation } from "./Navigation";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <aside className={styles.aside}>
      <Navigation />
      <div className={styles.logout} onClick={() => router.push("/auth")}>
        Logout
      </div>
    </aside>
  );
};
