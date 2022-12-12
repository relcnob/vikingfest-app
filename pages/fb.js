import React from "react";
import BurgerMenu from "../components/burger-menu/BurgerMenu";
import Loader from "../components/loader/Loader";
import NavBar from "../components/nav-bar/NavBar";
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
