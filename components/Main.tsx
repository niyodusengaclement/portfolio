import { NextComponentType } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import workspace from "../public/img/undraw_programming_re_kg9v.svg";

const Main: NextComponentType = () => {
  return (
    <div id="home" className={styles.main}>
      <div className={styles.leftWing}>
        <span className={styles.greetings}>Hi &#128075;, I&#8217;m</span>

        <h3 className={styles.title}>Clement NIYODUSENGA</h3>
        <h5 className={styles.position}>FULLSTACK SOFTWARE DEVELOPER</h5>
        <p className={styles.summary}>
          I’m a fullstack and mobile app software developer based in Kigali,
          Rwanda.
        </p>
        <button className={styles.btn}>Contact me</button>
      </div>
      <div className={styles.rightWing}>
        <Image alt="Workspace" src={workspace} height={400} width={400} />
      </div>
    </div>
  );
};

export default Main;
