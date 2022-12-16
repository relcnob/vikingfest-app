import { useEffect, useState } from "react";
import ScheduleItem from "../schedule/schedule-item/ScheduleItem";
import s from "./WatchlistView.module.css";

function WatchlistView({ user, bands, watchlist, schedule }) {
  const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const [inDisplay, setInDisplay] = useState([]);
  const [currentStage, setCurrentStage] = useState("all");
  const stages = Object.keys(schedule);
  const [initialActs, setInitialActs] = useState(getInitialActs());

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

  function handleStageFilter(stage) {
    if (stage !== currentStage) {
      setCurrentStage(stage);
      return;
    }
    setCurrentStage("all");
  }
  return (
    <>
      <div className={s.page}>
        <section className={s.header}>
          <h1>Watchlist</h1>
          <span>Saved bands</span>
        </section>
        <section className={s.actList}>
          <ul>{inDisplay && inDisplay.map((item) => item.act !== "break" && <ScheduleItem act={item} key={item.act} user={user} />)}</ul>
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
