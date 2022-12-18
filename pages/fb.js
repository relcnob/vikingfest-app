import React from "react";
import BurgerMenu from "../components/burger-menu/BurgerMenu";
import NavBar from "../components/nav-bar/NavBar";
import Loader from "../components/loader/Loader";
function fb() {
  return (
    <div>
      <Loader></Loader>
      <NavBar active="schedule"></NavBar>
      <BurgerMenu></BurgerMenu>
    </div>
  );
}

export default fb;
