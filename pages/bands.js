import React, { useEffect, useState } from "react";

import BandOverview from "../components/band-overview/BandOverview";

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
    </>
  );
}

export default Bands;
