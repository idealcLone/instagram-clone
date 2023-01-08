import React, { ReactElement } from "react";
import { Avatar } from "../UI/Avatar";

import styles from "./Navigation.module.scss";
import { Links, LinkType } from "../../consts/nav";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export const Navigation: React.FC = () => {
  const router = useRouter();

  const isActive = (link: LinkType): boolean => {
    if (link.path) {
      return router.pathname === link.path;
    } else if (link.action) {
      return false;
    }

    return false;
  };

  const getImage = (link: LinkType): ReactElement => {
    return isActive(link) ? (
      <Image src={link.activeIcon} alt={link.name} width={22} height={22} />
    ) : (
      <Image src={link.icon} alt={link.name} width={22} height={22} />
    );
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        {Links.map((link) => (
          <li
            key={link.name}
            className={`${styles.link} ${link.path === router.pathname}`}
          >
            {link.path ? (
              <Link href={link.path}>{getImage(link)}</Link>
            ) : (
              getImage(link)
            )}
          </li>
        ))}
        <li className={styles.link}>
          <Avatar />
        </li>
      </ul>
    </nav>
  );
};
