import React from "react";
import Image from "next/image";
import Anchor from "../Anchor";
import styles from "./BandOverview.module.css";
import BandOverviewGenre from "./band-overview-genre/BandOverviewGenre";
import NavBar from "../nav-bar/NavBar";
import BurgerMenu from "../burger-menu/BurgerMenu";
function BandOverview(props) {
  // console.log(props.data);
  const rockArr = handleFilter("Rock");
  const punkArr = handleFilter("Punk");
  const soulArr = handleFilter("Soul");
  const countryArr = handleFilter("Country");
  const rapArr = handleFilter("Rap");
  const electronicArr = handleFilter("Electronic");
  const worldArr = handleFilter("World");
  const popArr = handleFilter("Pop");

  function handleFilter(genre) {
    const filterValue = genre;
    const filteredArray = [...props.data];
    return filteredArray.filter(filterByGenre);

    function filterByGenre(band) {
      if (band.genre === filterValue) {
        return band;
      } else {
        return 0;
      }
    }
  }

  return (
    <section>
      <BurgerMenu></BurgerMenu>
      <NavBar active="bands"></NavBar>
      <div className={styles.container}>
        <h1>BANDS</h1>
        <BandOverviewGenre genre="Country" data={countryArr} />
        <BandOverviewGenre genre="Electronic" data={electronicArr} />
        <BandOverviewGenre genre="Pop" data={popArr} />
        <BandOverviewGenre genre="Punk" data={punkArr} />
        <BandOverviewGenre genre="Rap" data={rapArr} />
        <BandOverviewGenre genre="Rock" data={rockArr} />
        <BandOverviewGenre genre="Soul" data={soulArr} />
        <BandOverviewGenre genre="World" data={worldArr} />
      </div>
    </section>
  );
}

export default BandOverview;
