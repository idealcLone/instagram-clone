import "../styles/main.scss";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout/Layout";
import { useRouter } from "next/router";
import { ModalProvider } from "../contexts/ModalContext";
import { ModalWrapper } from "../components/Modals/ModalWrapper";
import { UserProvider } from "../contexts/UserContext";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <UserProvider>
      <ModalProvider>
        <ModalWrapper />
        {router.pathname === "/auth" ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ModalProvider>
    </UserProvider>
  );
}
