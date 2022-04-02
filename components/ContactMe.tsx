import { NextComponentType } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const ContactMe: NextComponentType = () => {
  return (
    <div id="Contact" className={styles.serviceContainer}>
      <h5 className={styles.position}>Contact Me</h5>
      <div className={styles.grid}>
        <div className={styles.rightWing}>
          <Image
            alt="my Photo"
            src="/img/github-svgrepo-com.svg"
            height={40}
            width={40}
          />
        </div>
        <div className={styles.leftWing}>
          <div className={styles.formContainer}>
            <form>
              <input
                type="text"
                placeholder="Full Name"
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
              />
              <input
                type="number"
                placeholder="Phone"
                className={styles.input}
              />
              <textarea rows={3}></textarea>
              <button className={styles.btn}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
