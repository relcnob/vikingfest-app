import styles from "./BurgerMenu.module.css";
import Anchor from "../Anchor";
import { useState } from "react";

function BurgerMenu() {
  const [menuState, setMenuState] = useState("inactive");

  function updateState() {
    menuState === "inactive" ? setMenuState("active") : setMenuState("inactive");
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
      <nav className={`${styles.navWrapper} ${styles[menuState]}`}>
        <ul>
          <li className={styles.navItem}>
            <Anchor href="#">My Ticket</Anchor>
          </li>
          <li className={styles.navItem}>
            <Anchor href="#">Festival Map</Anchor>
          </li>
          <li className={styles.navItem}>
            <Anchor href="#">Account</Anchor>
          </li>
          <li className={styles.navItem}>
            <Anchor href="#">Contact</Anchor>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default BurgerMenu;
