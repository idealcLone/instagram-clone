import { Feed } from "../components/Home/Feed";
import { Stories } from "../components/Home/Stories";
import { Suggestions } from "../components/Home/Suggestions";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Stories />
      <Feed />
      <Suggestions />
    </div>
  );
}
