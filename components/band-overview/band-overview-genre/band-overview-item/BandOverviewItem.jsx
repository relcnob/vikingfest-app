import React from "react";
import Anchor from "../../../Anchor";
import Image from "next/image";
import styles from "./BandOverviewItem.module.css";
function BandOverviewItem(props) {
  const serverUrl = "https://vikingfest-api.onrender.com";

  const getImage = () => {
    if (props.logo.includes("placeimg")) {
      return `https://via.assets.so/album.png?id=${Math.floor(
        Math.random() * 64 + 1
      )}&q=95&w=360&h=360&fit=fill`;
    } else {
      return props.logo.includes("http")
        ? props.logo
        : `${serverUrl}/logos/${props.logo}`;
    }
  };

  return (
    <li>
      <Anchor href={`/bands/${props.slug}`} className={styles.wrapper}>
        <h2>{props.name}</h2>
        <Image
          className={styles.img}
          alt={props.slug}
          src={getImage()}
          width="256"
          height="256"
        />
        {/*             <div className={styles.imagePlaceholder}></div> */}
      </Anchor>
    </li>
  );
}

export default BandOverviewItem;
