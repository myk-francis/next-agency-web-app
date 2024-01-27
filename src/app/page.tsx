import Image from "next/image";
import styles from "./home.module.css";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>

        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          sequi molestiae excepturi, placeat, quo totam quia eius eos, facere
          expedita minus quae.
        </p>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src={"/brands.png"} alt="" fill className={styles.brandImg} />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src={"/hero.gif"} alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
