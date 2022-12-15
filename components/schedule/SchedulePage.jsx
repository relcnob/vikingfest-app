import { useState, useEffect } from "react";
import ScheduleItem from "./schedule-item/ScheduleItem";
import s from "./SchedulePage.css";

function SchedulePage({ schedule, user, initialSession }) {
  const [chosenDay, setChosenDay] = useState("mon");
  const [inDisplay, setInDisplay] = useState([]);
  const [currentStage, setCurrentStage] = useState("all");
  const stages = Object.keys(schedule);
  useEffect(() => {
    console.log(currentStage);
    if (currentStage === "all") {
      const acts = [];
      stages.forEach((item) => {
        acts.push(schedule[item][chosenDay]);
      });
      //   console.log(acts.flat());
      setInDisplay(acts.flat());
    } else {
      setInDisplay(schedule[currentStage][chosenDay]);
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
    <div className={s.page}>
      <section className={s.header}>
        <h1>Schedule</h1>
        <label>
          Select day of the week
          <select value={chosenDay} onChange={(e) => setChosenDay(e.target.value)}>
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
        <ul>{inDisplay.map((item) => item.act !== "break" && <ScheduleItem act={item} key={item.act} />)}</ul>
      </section>
      <div>
        <ul>
          {stages.map((stage) => (
            <li key={stage}>
              <button onClick={() => handleStageFilter(stage)}>{stage}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SchedulePage;
