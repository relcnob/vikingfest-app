import React from "react";
import styles from "./ScheduleItem.module.css";

function ScheduleItem(props) {
  return (
    <article className={styles.article}>
      <div className={`${styles[props.stage]}`}>
        <p>{props.date}</p>
        <p>{props.time}</p>
      </div>
      <div className={styles.right}>
        <div>
          <p>{props.band}</p>
          <p>
            {props.stage} | {props.duration}
          </p>
        </div>
        <div className={styles.star}>STAR</div>
      </div>
    </article>
  );
}

export default ScheduleItem;
