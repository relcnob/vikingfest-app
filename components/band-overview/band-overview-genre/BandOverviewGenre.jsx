import React from "react";
import styles from "./BandOverviewGenre.module.css";
import BandOverviewItem from "./band-overview-item/BandOverviewItem";
function BandOverviewGenre(props) {
  return (
    <article>
      <h1 className={styles.header}>{props.genre}</h1>
      <ul className={styles.list}>
        {props.data.map((band) => {
          return (
            <BandOverviewItem
              name={band.name}
              slug={band.slug}
              key={band.slug}
              logo={band.logo}
            ></BandOverviewItem>
          );
        })}
      </ul>
    </article>
  );
}

export default BandOverviewGenre;
