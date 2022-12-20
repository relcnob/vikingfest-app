import styles from "./BurgerMenu.module.css";
import Anchor from "../Anchor";
import { useState } from "react";

function BurgerMenu() {
  const [menuState, setMenuState] = useState("inactive");

  function updateState() {
    menuState === "inactive"
      ? setMenuState("active")
      : setMenuState("inactive");
  }

  return (
    <section className={` ${styles.burgerWrapper} `}>
      <div
        className={`${styles.burgerIcon} ${styles[menuState]}`}
        onClick={() => {
          updateState();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Anchor className={styles.logotype} href="/">
        VIKINGfest
      </Anchor>
      <nav className={`${styles.navWrapper} ${styles[menuState]}`}>
        <ul>
          <li
            className={styles.navItem}
            onClick={() => {
              updateState();
            }}
          >
            <Anchor href="/schedule">Schedule</Anchor>
          </li>
          <li
            className={styles.navItem}
            onClick={() => {
              updateState();
            }}
          >
            <Anchor href="/bands">Bands</Anchor>
          </li>
          <li
            className={styles.navItem}
            onClick={() => {
              updateState();
            }}
          >
            <Anchor href="/festivalmap">Festival Map</Anchor>
          </li>
          <li
            className={styles.navItem}
            onClick={() => {
              updateState();
            }}
          >
            <Anchor href="mailto:contact@vikingfest.io">Contact</Anchor>
          </li>
          <li
            className={styles.navItem}
            onClick={() => {
              updateState();
            }}
          >
            <Anchor href="/festivalmap">Log Out</Anchor>
          </li>
          <li
            className={styles.navItem}
            onClick={() => {
              updateState();
            }}
          >
            <Anchor href="/festivalmap">Log In</Anchor>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default BurgerMenu;
