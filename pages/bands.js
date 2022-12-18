import React from "react";
import BandOverview from "../components/band-overview/BandOverview";
import BurgerMenu from "../components/burger-menu/BurgerMenu";
import NavBar from "../components/nav-bar/NavBar";
function Bands() {
  return (
    <>
      <BandOverview />
      <NavBar active="bands"></NavBar>
      <BurgerMenu></BurgerMenu>
    </>
  );
}

export default Bands;
