import React, { useEffect, useState } from "react";
import Image from "next/image";
import Anchor from "../Anchor";
import styles from "./BandOverview.module.css";
import BandOverviewGenre from "./band-overview-genre/BandOverviewGenre";
function BandOverview(props) {
  // filtering genres
  // create copy of array
  // filter by selected genre
  //

  /*   const [filterGenre, setFilterGenre] = useState();
  function filter() {
    function isMatching(band) {
      if (band.genre === filterGenre) {
        return band;
      } else {
        return 0;
      }
    }
  }
  filter(); */
  return (
    <section className={styles.section}>
      <div className="container">
        <BandOverviewGenre data={props.data}></BandOverviewGenre>
      </div>
    </section>
  );
}

export default BandOverview;
