import s from "./ScheduleItem.module.css";

function ScheduleItem({ act }) {
  // console.log(act);
  function handleDay() {
    switch (act.day) {
      case "mon":
        return "Monday";

      case "tue":
        return "Tuesday";

      case "wed":
        return "Wednesday";
      case "thu":
        return "Thursday";
      case "fri":
        return "Friday";
      case "sat":
        return "Saturday";
      case "sun":
        return "Sunday";
    }
  }
  return (
    <article className={s.item}>
      <div>
        <h2 className={s.topText}>{act.act}</h2>
        <span className={s.bottomText}>
          {act.stage} | {(Number(act.end.split(":")[0]) - Number(act.start.split(":")[0])) * 60} minutes
        </span>
      </div>
      <div className={`${s.specs} ${s[act.stage]}`}>
        <span className={s.topText}>{handleDay()}</span>
        <span className={s.bottomText}>{act.start}</span>
      </div>
      <div></div>
    </article>
  );
}

export default ScheduleItem;
