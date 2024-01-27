import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

function AboutPage() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image alt="" src="/about.png" fill />
      </div>
    </div>
  );
}

export default AboutPage;
