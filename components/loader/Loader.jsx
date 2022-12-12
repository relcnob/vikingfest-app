import React from "react";
import styles from "./Loader.module.css";
import Image from "next/image";
import vikingfestlogo from "../../public/vikingfest.svg";
function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <Image
        src={vikingfestlogo}
        alt="logo"
        className={styles.loaderLogo}
      ></Image>
      <span className={styles.loaderSpinner}></span>
    </div>
  );
}

export default Loader;
