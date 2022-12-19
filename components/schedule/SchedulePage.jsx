import { useState, useEffect } from "react";
import BurgerMenu from "../burger-menu/BurgerMenu";
import ScheduleItem from "./schedule-item/ScheduleItem";
import s from "./SchedulePage.module.css";
import NavBar from "../nav-bar/NavBar";
function SchedulePage({ schedule, user, initialSession }) {
  const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  const [chosenDay, setChosenDay] = useState(weekday[new Date().getDay()]);
  const [inDisplay, setInDisplay] = useState([]);
  const [currentStage, setCurrentStage] = useState("all");

  const stages = Object.keys(schedule);
  useEffect(() => {
    if (currentStage === "all") {
      const acts = [];
      stages.forEach((item) => {
        acts.push(
          schedule[item][chosenDay].map((each) => {
            return { ...each, stage: item, day: chosenDay };
          })
        );
      });
      const sortedActs = acts.flat().sort((a, b) => {
        const startA = Number(a.start.split(":")[0]);
        const startB = Number(b.start.split(":")[0]);
        if (startA < startB) {
          return -1;
        } else if (startA > startB) {
          return 1;
        }
        return 0;
      });
      setInDisplay(sortedActs);
    } else {
      setInDisplay(
        schedule[currentStage][chosenDay].map((each) => {
          return { ...each, stage: currentStage, day: chosenDay };
        })
      );
    }
  }, [currentStage, chosenDay]);
  function handleStageFilter(stage) {
    if (stage !== currentStage) {
      setCurrentStage(stage);
      return;
    }
    setCurrentStage("all");
  }
  return (
    <>
      <NavBar active="schedule"></NavBar>
      <BurgerMenu></BurgerMenu>
      <div className={s.page}>
        <section className={s.header}>
          <h1>Schedule</h1>
          <label>
            Select day of the week
            <select
              value={chosenDay}
              onChange={(e) => setChosenDay(e.target.value)}
            >
              <option value="mon">Monday</option>
              <option value="tue">Tuesday</option>
              <option value="wed">Wednesday</option>
              <option value="thu">Thursday</option>
              <option value="fri">Friday</option>
              <option value="sat">Sunday</option>
            </select>
          </label>
        </section>
        <section className={s.actList}>
          <ul>
            {inDisplay.map(
              (item) =>
                item.act !== "break" && (
                  <ScheduleItem act={item} key={item.act} user={user} />
                )
            )}
          </ul>
        </section>
        <div className={s.stageFilters}>
          <ul>
            {stages.map((stage) => (
              <li key={stage}>
                <button
                  className={`${currentStage === stage ? s.active : ""} ${
                    s[stage]
                  }`}
                  onClick={() => handleStageFilter(stage)}
                >
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

export default SchedulePage;
