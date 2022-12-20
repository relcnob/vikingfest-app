import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { getWatchlist, addToWatchlist, removeFromWatchlist } from "../../../utils/watchlist";
import Star from "../../Star";
import s from "./ScheduleItem.module.css";

function ScheduleItem({ act, user }) {
  // console.log(user);
  const slug = act.act
    .trim()
    .toLowerCase()
    .split(" ")
    .join("-")
    .replace("/", "-")
    .replace("'", "")
    .replace("_", "")
    .replace(",", "")
    .replace("--", "-")
    .replace("--", "-");
  const supabase = useSupabaseClient();
  const [watchlist, setWatchlist] = useState(null);
  const [isStarred, setIsStarred] = useState(false);
  const [currentAction, setCurrentAction] = useState("");

  // Populate profileData
  useEffect(() => {
    async function getWatchlist() {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, watchlist(bands)");
      if (!error) {
        setWatchlist(
          data.filter((entry) => entry.id === user.id)[0].watchlist.bands
        );

        // setIsStarred(profileData.watchlist.bands.includes(props.slug));
      } else {
        console.log(error);
      }
    }
    async function addToWatchlist() {
      // console.log("add");
      const { data, error } = await supabase
        .from("watchlist")
        .update({ bands: watchlist.concat(slug) })
        .eq("id", user.id);
      setWatchlist(null);
    }
    async function removeFromWatchlist() {
      // console.log("remove");

      const { data, error } = await supabase
        .from("watchlist")
        .update({ bands: watchlist.filter((band) => band !== slug) })
        .eq("id", user.id);

      setWatchlist(null);
    }
    if (user) {
      if (!watchlist) {
        getWatchlist();
      } else if (watchlist) {
        // Check is band is already in the watchlist
        if (currentAction === "ADD") {
          addToWatchlist();
          // Reset current action
          setCurrentAction("");
        } else if (currentAction === "REMOVE") {
          removeFromWatchlist();
          // Reset current action
          setCurrentAction("");
        }
        if (currentAction === "") {
          if (watchlist.includes(slug)) {
            setIsStarred(true);
          } else {
            setIsStarred(false);
          }
        }
      }
    }
  }, [watchlist]);

  function handleStar() {
    if (isStarred) {
      setIsStarred(false);
      // Change current action to remove
      setCurrentAction("REMOVE");
      // Rerun the useEffect
      setWatchlist(null);
    } else {
      // change current action to add
      setCurrentAction("ADD");
      // Rerun the useEffect
      setWatchlist(null);
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
          {(Number(act.end.split(":")[0]) - Number(act.start.split(":")[0])) *
            60}{" "}
          minutes
        </span>
      </div>
      <div className={`${s.specs} ${s[act.stage]}`}>
        <span className={s.topText}>{handleDay()}</span>
        <span className={s.bottomText}>{act.start}</span>
      </div>
      {user && (
        <div
          className={isStarred ? s.starYellow : s.starGrey}
          onClick={handleStar}
        >
          <Star />
        </div>
      )}
    </article>
  );
}

export default ScheduleItem;
