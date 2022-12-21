import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { getWatchlist, addToWatchlist, removeFromWatchlist } from "../../../utils/watchlist";
import Star from "../../Star";
import s from "./ScheduleItem.module.css";

function ScheduleItem({ act, user, watchlist, removeStar, addStar, running }) {
  // console.log(user);
  const slug = act.act.trim().toLowerCase().split(" ").join("-").replace("/", "-").replace("'", "").replace("_", "").replace(",", "").replace("--", "-").replace("--", "-");
  const supabase = useSupabaseClient();
  const [isStarred, setIsStarred] = useState(false);

  // Populate profileData
  useEffect(() => {
    if (!running) {
      // console.log("running");
      // console.log(watchlist);
      // console.log(watchlist);
      watchlist.includes(slug) ? setIsStarred(true) : setIsStarred(false);
    }
  }, [watchlist]);
  function handleStar() {
    if (isStarred) {
      removeStar(slug);
    } else {
      addStar(slug);
    }
  }
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
          <em className={s[act.stage.toLowerCase()]}>{act.stage}</em> |&nbsp;
          {(Number(act.end.split(":")[0]) - Number(act.start.split(":")[0])) * 60} minutes
        </span>
      </div>
      <div className={`${s.specs} ${s[act.stage]}`}>
        <span className={s.topText}>{handleDay()}</span>
        <span className={s.bottomText}>{act.start}</span>
      </div>
      {user && (
        <div className={isStarred ? s.starYellow : s.starGrey} onClick={handleStar}>
          <Star />
        </div>
      )}
    </article>
  );
}

export default ScheduleItem;
