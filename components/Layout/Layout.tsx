import React from "react";
import { Header } from "./Header";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={`container ${roboto.className}`}>{children}</main>
    </>
  );
};
