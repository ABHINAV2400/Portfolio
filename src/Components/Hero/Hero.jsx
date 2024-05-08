import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Abhinav Bolla</h1>
        <p className={styles.description}>
          An aspiring and self-motivated engineer, always exploring different
          technologies. Perseverant and good at working in a team. Loves
          challenges, developing applications and solving problems.
        </p>
        <a
          href="mailto:bollaabhinav2412.gmail.com"
          className={styles.contactBtn}
        >
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="hero-image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomblur} />
    </section>
  );
};

export default Hero;
