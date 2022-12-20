import React from "react";
import AreaOverview from "../components/area-overview/AreaOverview.jsx";
import BurgerMenu from "../components/burger-menu/BurgerMenu";
function festivalmap() {
  return (
    <>
      <BurgerMenu></BurgerMenu>
      <div className="festivalMapWrapper">
        <AreaOverview />
      </div>
    </>
  );
}

export default festivalmap;
