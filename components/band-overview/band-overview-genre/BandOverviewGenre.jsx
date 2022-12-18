import React from "react";
import Image from "next/image";
import Anchor from "../../Anchor";
import styles from "./BandOverviewGenre.module.css";
import imagePlaceholder from "../../../public/imagePlaceholder.png";
function BandOverviewGenre(props) {
  return (
    <article>
      <h1 className={styles.h1}>{props.data.genre}</h1>
      <ul className={styles.list}>
        {props.data.map((band) => {
          return (
            <li key={band.slug}>
              <Anchor href="/band">
                <Image alt="band-name" src={imagePlaceholder} />
                <h2 className={styles.bandh1}>{band.name}</h2>
              </Anchor>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default BandOverviewGenre;
