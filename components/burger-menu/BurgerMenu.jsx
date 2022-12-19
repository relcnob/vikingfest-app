import styles from "./BurgerMenu.module.css";
import Anchor from "../Anchor";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

function BurgerMenu() {
  const [menuState, setMenuState] = useState("inactive");
  const { signOut, auth } = useAuth();

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
        <button onClick={() => signOut()}>Signout</button>
      </nav>
    </section>
  );
}

export default BurgerMenu;
