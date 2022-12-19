import styles from "./NavBar.module.css";
import Anchor from "../Anchor";
import Image from "next/image";
import bands from "../../public/bands.svg";
import schedule from "../../public/schedule.svg";
import favorites from "../../public/favourites.svg";
import bandsIconActive from "../../public/bandsIconActive.svg";
import scheduleIconActive from "../../public/scheduleIconActive.svg";
import favoritesIconActive from "../../public/favouritesIconActive.svg";

import { useState, useEffect } from "react";

function NavBar(props) {
  const [bandsIcon, setBandsIcon] = useState(bands);
  const [scheduleIcon, setScheduleIcon] = useState(schedule);
  const [favoritesIcon, setFavoritesIcon] = useState(favorites);
  const [bandsClass, setBandsClass] = useState("");
  const [scheduleClass, setScheduleClass] = useState("");
  const [favoritesClass, setFavoritesClass] = useState("");
  const activeMenu = props.active;

  useEffect(() => {
    if (activeMenu === "bands") {
      setBandsIcon(bandsIconActive);
      setBandsClass("active");
    } else if (activeMenu === "schedule") {
      setScheduleIcon(scheduleIconActive);
      setScheduleClass("active");
    } else if (activeMenu === "favorites") {
      setFavoritesIcon(favoritesIconActive);
      setFavoritesClass("active");
    }
  }, [activeMenu]);

  return (
    <section className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <Anchor className={styles[bandsClass]} href="/bands">
          <Image src={bandsIcon} alt="drum icon"></Image>
          <p>Bands</p>
        </Anchor>
        <Anchor className={styles[scheduleClass]} href="schedule">
          <Image src={scheduleIcon} alt="schedule icon"></Image>
          <p>Schedule</p>
        </Anchor>
        <Anchor className={styles[favoritesClass]} href="watchlist">
          <Image src={favoritesIcon} alt="star icon"></Image>
          <p>Favorites</p>
        </Anchor>
      </div>
    </section>
  );
}

export default NavBar;
