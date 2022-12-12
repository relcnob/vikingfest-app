import React from "react";
import styles from "./Loader.module.css";
import Image from "next/image";
import vikingFestlogo from "../../public/vikingfest.svg";
function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <Image
        src={vikingFestlogo}
        alt="logo"
        className={styles.loaderLogo}
      ></Image>
      <span className={styles.loaderSpinner}></span>
    </div>
  );
}

export default Loader;
