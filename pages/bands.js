import React from "react";
import BandOverview from "../components/band-overview/BandOverview";
import { useState, useEffect } from "react";
function Bands() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://vikingfest-api.onrender.com/bands")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  function filterData() {}

  return (
    <>
      <BandOverview data={data} />
    </>
  );
}

export default Bands;
