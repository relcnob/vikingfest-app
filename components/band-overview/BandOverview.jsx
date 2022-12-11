import React from "react";
import Image from "next/image";
import Anchor from "../Anchor";
import styles from "./BandOverview.module.css";
import BandOverviewGenre from "./band-overview-genre/BandOverviewGenre";
function BandOverview() {
  return (
    <section>
      <div className="container">
        <BandOverviewGenre genre="Alternative Rock" />
        <BandOverviewGenre genre="Rock" />
        <BandOverviewGenre genre="Metal" />
        <BandOverviewGenre genre="Pop" />
        <BandOverviewGenre genre="RnB" />
        <BandOverviewGenre genre="Jazz" />
      </div>
    </section>
  );
}

export default BandOverview;
