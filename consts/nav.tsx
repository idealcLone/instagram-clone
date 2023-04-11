import React from "react";

export const OPEN_NEW_POST_MODAL = "OPEN_NEW_POST_MODAL";
export const OPEN_ACTIVITY_MODAL = "OPEN_ACTIVITY_MODAL";
export const OPEN_SEARCH = "OPEN_SEARCH";
export const OPEN_POST = "OPEN_POST";

export type LinkType = {
  name: string;
  path?: string;
  action?: string;
  icon: string;
  activeIcon: string;
  disabled?: boolean;
};

export const Links: LinkType[] = [
  {
    name: "Home",
    path: "/",
    icon: "/icons/home.svg",
    activeIcon: "/icons/home-active.svg",
  },
  {
    name: "Search",
    icon: "/icons/search.svg",
    activeIcon: "/icons/search.svg",
    action: OPEN_SEARCH,
  },
  {
    name: "Inbox",
    path: "/inbox",
    icon: "/icons/inbox.svg",
    activeIcon: "/icons/inbox-active.svg",
    disabled: true,
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
    disabled: true,
  },
  {
    name: "Activity",
    icon: "/icons/activity.svg",
    activeIcon: "/icons/activity-active.svg",
    action: OPEN_ACTIVITY_MODAL,
    disabled: true,
  },
];
