import { NextComponentType } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import coding from "../public/img/coding-svgrepo-com.svg";
import responsive from "../public/img/responsive-svgrepo-com.svg";
import mobile from "../public/img/mobile-phone-phone-call-svgrepo-com.svg";

const Services: NextComponentType = () => {
  return (
    <div id="services" className={styles.serviceContainer}>
      <h5 className={styles.position}>Services</h5>
      <div className={styles.grid}>
        <div className={`${styles["card"]} ${styles["cardFooterOrange"]}`}>
          <Image src={coding} height={30} width={30} alt="" />
          <h2>Backend</h2>
          <p>
            I build the REST API that can be used by different applications.
          </p>
        </div>
        <div className={`${styles["card"]} ${styles["cardFooterYellow"]}`}>
          <Image src={responsive} height={30} width={30} alt="" />
          <h2>Frontend</h2>
          <p>I build responsive interfaces using modern web technologies.</p>
        </div>
        <div className={`${styles["card"]} ${styles["cardFooterWhite"]}`}>
          <Image src={mobile} height={30} width={30} alt="" />
          <h2>Mobile</h2>
          <p>I build mobile applications that solve real world problems.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
