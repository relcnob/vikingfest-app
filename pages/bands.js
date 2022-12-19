import React, { useEffect, useState } from "react";

import BandOverview from "../components/band-overview/BandOverview";
import BurgerMenu from "../components/burger-menu/BurgerMenu";
import NavBar from "../components/nav-bar/NavBar";
function Bands() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/bands")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
<BandOverview data={data} />
      <NavBar active="bands"></NavBar>
      <BurgerMenu></BurgerMenu>
    </>
  );
}

export default Bands;
