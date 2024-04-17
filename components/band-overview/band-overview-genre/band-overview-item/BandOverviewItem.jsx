import React from "react";
import Anchor from "../../../Anchor";
import Image from "next/image";
import styles from "./BandOverviewItem.module.css";
function BandOverviewItem(props) {
  const serverUrl = "https://vikingfest-api.onrender.com";
  return (
    <li>
      <Anchor href={`/bands/${props.slug}`} className={styles.wrapper}>
        <h2>{props.name}</h2>
        <Image
          className={styles.img}
          alt={props.slug}
          src={
            props.logo.includes("http")
              ? props.logo
              : `${serverUrl}/logos/${props.logo}`
          }
          width="256"
          height="256"
        />
        {/*             <div className={styles.imagePlaceholder}></div> */}
      </Anchor>
    </li>
  );
}

export default BandOverviewItem;
