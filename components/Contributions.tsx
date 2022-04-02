import { NextComponentType } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Contributions: NextComponentType = () => {
  return (
    <div id="contributions" className={styles.serviceContainer}>
      <h5 className={styles.position}>Contributions</h5>
      <div className={styles.grid}>
        <div className={`${styles["cardPreview"]}`}>
          <Image src={"/img/explora2.png"} height={500} width={300} alt="" />
        </div>
        <div className={`${styles["cardPreview"]}`}>
          <Image src={"/img/explora2.png"} height={500} width={300} alt="" />
        </div>
        <div className={`${styles["cardPreview"]}`}>
          <Image src={"/img/explora2.png"} height={500} width={300} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contributions;
