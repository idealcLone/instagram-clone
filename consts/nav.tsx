import React from "react";

export const OPEN_NEW_POST_MODAL = "OPEN_NEW_POST_MODAL";
export const OPEN_ACTIVITY_MODAL = "OPEN_ACTIVITY_MODAL";

export type LinkType = {
  name: string;
  path?: string;
  action?: string;
  icon: string;
  activeIcon: string;
};

export const Links: LinkType[] = [
  {
    name: "Home",
    path: "/",
    icon: "/icons/home.svg",
    activeIcon: "/icons/home-active.svg",
  },
  {
    name: "Inbox",
    path: "/inbox",
    icon: "/icons/inbox.svg",
    activeIcon: "/icons/inbox-active.svg",
  },
  {
    name: "New",
    icon: "/icons/new.svg",
    activeIcon: "/icons/new.svg",
    action: OPEN_NEW_POST_MODAL,
  },
  {
    name: "Explore",
    path: "/explore",
    icon: "/icons/explore.svg",
    activeIcon: "/icons/explore-active.svg",
  },
  {
    name: "Activity",
    icon: "/icons/activity.svg",
    activeIcon: "/icons/activity-active.svg",
    action: OPEN_ACTIVITY_MODAL,
  },
];
