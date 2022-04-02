import { NextComponentType } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import profileImage from "../public/img/undraw_coding_re_iv62.svg";

const About: NextComponentType = () => {
  return (
    <div id="about" className={styles.aboutContainer}>
      <div className={styles.rightWing}>
        <Image alt="my Photo" src={profileImage} height={400} width={400} />
      </div>
      <div className={styles.leftWing}>
        <h5 className={styles.position}>About Me</h5>
        <div className={styles.summary}>
          <p>
            I’m a passionate full-stack software engineer, building web and
            mobile applications. Versatile software development professional
            capable of producing robust systems to meet diverse customer needs.
            Manage projects and teams to accomplish challenging timelines.
            Explore technical capabilities and push boundaries to exceed
            expectations.
          </p>

          <p>
            I have top skills in JavaScript and it&#8217;s frameworks including React
            JS in frontend, Node JS on Backend and React Native on mobile
            Applications
          </p>
          <p>
            I have my values that lead me everytime which are Punctuality,
            Collaboration and Adaptability
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
