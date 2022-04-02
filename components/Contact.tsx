import { NextComponentType } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import profileImage from "../public/img/undraw_coding_re_iv62.svg";

const Contact: NextComponentType = () => {
  return (
    <div id="contact" className={styles.aboutContainer}>
      <div className={styles.rightWing}>
        <Image alt="my Photo" src={profileImage} height={400} width={400} />
      </div>
      <div className={styles.leftWing}>
        <div className={styles.formContainer}>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className={styles.input}
            />
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="number" placeholder="Phone" className={styles.input} />
            <textarea rows={3}></textarea>
            <button className={styles.btn}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
