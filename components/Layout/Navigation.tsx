import React, { ReactElement, useState } from "react";
import { Avatar } from "../UI/Avatar";

import styles from "./Navigation.module.scss";
import { Links, LinkType } from "../../consts/nav";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useModalContext } from "../../contexts/ModalContext";
import { useUserContext } from "../../contexts/UserContext";

export const Navigation: React.FC = () => {
  const { user } = useUserContext();

  const router = useRouter();
  const { setModalType } = useModalContext();

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
      <Image
        src={isActive(link) ? link.activeIcon : link.icon}
        alt={link.name}
        width={22}
        height={22}
      />
    ) : (
      <Image src={link.icon} alt={link.name} width={22} height={22} />
    );
  };

  const handleAction = (action: string) => {
    setModalType(action);
  };

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <div>
              <Image
                src={"/icons/logo.svg"}
                alt="Logo"
                height={30}
                width={100}
              />
            </div>
          </li>
          {Links.map(
            (link) =>
              !link.disabled && (
                <li
                  key={link.name}
                  className={`${styles.link} ${link.path === router.pathname}`}
                >
                  {link.path ? (
                    <Link href={link.path}>
                      {getImage(link)}
                      {link.name}
                    </Link>
                  ) : (
                    <div
                      onClick={() => link.action && handleAction(link.action)}
                    >
                      {getImage(link)}
                      {link.name}
                    </div>
                  )}
                </li>
              )
          )}
          <li className={styles.link}>
            <Link href={`/profile/${user.username}`}>
              <Avatar size={"sm"} />
              <div>Profile</div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
