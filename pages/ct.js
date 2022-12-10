import React from "react";
import BandSingleView from "../components/band-single-view/BandSingleView";

function ct() {
  return (
    <>
      <BandSingleView
        bandName="SON & SONS"
        genre="Alternative Rock"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic delectus quibusdam quaerat voluptate ipsam voluptatem, nostrum ab. Accusamus nobis voluptatem cumque autem dolorem eaque, repudiandae perferendis magnam incidunt
              dignissimos!"
        members={["Jeffrey", "Vera", "Kelly", "Bea"]}
      />
    </>
  );
}

export default ct;
