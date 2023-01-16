import { Feed } from "../components/Home/Feed";
import { Stories } from "../components/Home/Stories";
import { Sidebar } from "../components/Home/Sidebar";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Stories />
      <Feed />
      <Sidebar />
    </div>
  );
}
