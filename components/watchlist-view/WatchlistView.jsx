import { useEffect, useState } from "react";
import ScheduleItem from "../schedule/schedule-item/ScheduleItem";
import s from "./WatchlistView.module.css";
import BandOverviewItem from "../band-overview/band-overview-genre/band-overview-item/BandOverviewItem";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import NavBar from "../nav-bar/NavBar";
import BurgerMenu from "../burger-menu/BurgerMenu";

function WatchlistView({ user, bands, watchlist, schedule }) {
  const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const [inDisplay, setInDisplay] = useState([]);
  const [currentStage, setCurrentStage] = useState("all");
  const [bandsInView, setBandsInView] = useState(bands);
  const stages = Object.keys(schedule);
  const [initialActs, setInitialActs] = useState(getInitialActs());
  const [watchlistLocal, setWatchlistLocal] = useState(watchlist);
  const [running, setRunning] = useState(false);
  const [first, setFirst] = useState(true);
  const supabase = useSupabaseClient();

  function makeSlug(item) {
    return item.act.trim().toLowerCase().split(" ").join("-").replace("/", "-").replace("'", "").replace("_", "").replace(",", "").replace("--", "-").replace("--", "-");
  }
  function getInitialActs() {
    const allActs = [];
    stages.forEach((stage) => {
      weekday.forEach((day) => {
        const acts = schedule[stage][day].filter((item) => item.act !== "break");
        acts.forEach((item) => allActs.push({ ...item, day, stage, slug: makeSlug(item) }));
      });
    });
    const filteredActs = allActs.filter((act) => watchlist.includes(act.slug));
    const sortedActs = filteredActs.sort((a, b) => {
      const startA = Number(a.start.split(":")[0]);
      const startB = Number(b.start.split(":")[0]);
      if (startA < startB) {
        return -1;
      } else if (startA > startB) {
        return 1;
      }
      return 0;
    });

    return sortedActs;
  }
  useEffect(() => {
    if (currentStage === "all") {
      setInDisplay(initialActs);
    } else {
      setInDisplay(initialActs.filter((act) => act.stage === currentStage));
    }
  }, [currentStage, initialActs]);
  useEffect(() => {
    async function updateWatchlist() {
      const { data, error } = await supabase.from("watchlist").update({ bands: watchlistLocal }).eq("id", user.id);
    }
    if (user) {
      if (first) {
        setFirst(false);
      } else if (running && !first) {
        // Check is band is already in the watchlist
        updateWatchlist();
        setRunning(false);
      }
    }
  }, [running]);

  function addStar(slug) {
    setWatchlistLocal((old) => old.concat(slug));
    setTimeout(() => {
      setRunning(true);
    }, 500);
  }
  function removeStar(slug) {
    setWatchlistLocal((old) => old.filter((item) => item !== slug));
    setTimeout(() => {
      setRunning(true);
    }, 500);
  }

  function handleStageFilter(stage) {
    if (stage !== currentStage) {
      setCurrentStage(stage);
      return;
    }
    setCurrentStage("all");
  }
  return (
    <>
      <NavBar active="favorites"></NavBar>
      <BurgerMenu></BurgerMenu>
      <div className={s.page}>
        <section className={s.header}>
          <h1>Watchlist</h1>
          <span>Saved bands</span>
          <ul className={s.list}>
            {bandsInView.map((band) => (
              <BandOverviewItem name={band.name} slug={band.slug} key={band.slug} logo={band.logo} />
            ))}
          </ul>
        </section>
        <section className={s.actList}>
          <ul>
            {inDisplay &&
              inDisplay.map(
                (item) => item.act !== "break" && <ScheduleItem act={item} key={item.act} user={user} watchlist={watchlistLocal} addStar={addStar} removeStar={removeStar} running={running} />
              )}
          </ul>
        </section>
        <div className={s.stageFilters}>
          <ul>
            {stages.map((stage) => (
              <li key={stage}>
                <button className={`${currentStage === stage ? s.active : ""} ${s[stage]}`} onClick={() => handleStageFilter(stage)}>
                  {stage}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default WatchlistView;
