import { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import whatsapp from "../public/img/whatsapp-svgrepo-com.svg";
import linkedIn from "../public/img/linkedin-svgrepo-com.svg";
import github from "../public/img/github-svgrepo-com.svg";
import stars from "../public/img/stars-svgrepo-com.svg";

const Footer: NextComponentType = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image src={stars} height={24} width={24} alt="stars" />
      </div>
      <span>
        &copy; Copyright {new Date().getFullYear()}. All rights reserved
      </span>
      <div className={styles.social}>
        <ul>
          <li>
            <Link passHref href="http://github.com/niyodusengaclement">
              <Image src={github} height={24} width={24} alt="github" />
            </Link>
          </li>
          <li>
            <Link passHref href="http://linkedin.com/in/niyodusenga-clement/">
              <Image src={linkedIn} height={24} width={24} alt="linkedIn" />
            </Link>
          </li>
          <li>
            <Link
              passHref
              href="https://api.whatsapp.com/send?phone=250780282575"
            >
              <Image src={whatsapp} height={24} width={24} alt="Whatsapp" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
