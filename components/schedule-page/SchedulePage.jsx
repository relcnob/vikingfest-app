import React from "react";
import ScheduleItem from "./schedule-item/ScheduleItem";
import styles from "./SchedulePage.module.css";
function SchedulePage() {
  return (
    <>
      <section className={styles.top}>
        <h1>Schedule</h1>
        <h2>Select day of the week</h2>
        <select name="day" id="day">
          <option value="all">All days</option>
          <option value="mon">Monday</option>
          <option value="tues">Tuesday</option>
          <option value="wednes">Wednesday</option>
          <option value="thurs">Thursday</option>
          <option value="fri">Friday</option>
          <option value="satur">Saturday</option>
          <option value="sun">Sunday</option>
        </select>
      </section>
      <ol>
        <li>
          <ScheduleItem date="11/01" band="Sons & sons" time="12:00" stage="helheim" duration="1 hour" />
          <ScheduleItem date="11/01" band="Sons & sons" time="12:00" stage="alfheim" duration="1 hour" />
          <ScheduleItem date="11/01" band="Sons & sons" time="12:00" stage="svartheim" duration="1 hour" />
          <ScheduleItem date="11/01" band="Sons & sons" time="12:00" stage="niflheim" duration="1 hour" />
          <ScheduleItem date="11/01" band="Sons & sons" time="12:00" stage="muspelheim" duration="1 hour" />
        </li>
      </ol>
    </>
  );
}

export default SchedulePage;
