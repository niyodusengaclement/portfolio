import { NextComponentType } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import stars from "../public/img/stars-svgrepo-com.svg";

const Header: NextComponentType = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={stars} height={24} width={24} alt="stars" />
        </div>
        <div id="home" className={styles.nav}>
          <ul>
            <li className={styles.link}>
              <Link href={"#home"}>Home</Link>
            </li>
            <li className={styles.link}>
              <Link href="#about">About</Link>
            </li>
            <li className={styles.link}>
              <Link href="#services">Services</Link>
            </li>
            <li className={styles.link}>
              <Link href="#contributions">Contributions</Link>
            </li>
            <li className={styles.link}>
              <Link href="#contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
