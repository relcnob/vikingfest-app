import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./BandSingleView.module.css";
import MemberCard from "../MemberCard/MemberCard";
import placeholdImageBandView from "../../public/placeholdImageBandView.png";
import favourites from "../../public/favouriteIcon.svg";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Star from "../Star";
function BandSingleView(props) {
  const supabase = useSupabaseClient();
  const user = props.user;
  const [watchlist, setWatchlist] = useState(null);
  const [isStarred, setIsStarred] = useState(false);
  const [currentAction, setCurrentAction] = useState("");

  // Populate profileData
  useEffect(() => {
    async function getWatchlist() {
      const { data, error } = await supabase.from("profiles").select("id, watchlist(bands)");
      if (!error) {
        setWatchlist(data.filter((entry) => entry.id === user.id)[0].watchlist.bands);

        // setIsStarred(profileData.watchlist.bands.includes(props.slug));
      } else {
        console.log(error);
      }
    }
    async function addToWatchlist() {
      // console.log("add");
      const { data, error } = await supabase
        .from("watchlist")
        .update({ bands: watchlist.concat(props.slug) })
        .eq("id", user.id);
      setWatchlist(null);
    }
    async function removeFromWatchlist() {
      // console.log("remove");

      const { data, error } = await supabase
        .from("watchlist")
        .update({ bands: watchlist.filter((band) => band !== props.slug) })
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
          if (watchlist.includes(props.slug)) {
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
  return (
    <article className={styles.BandView}>
      <div className="container">
        <div className={styles.top}>
          <button>{"<"}</button>
          <Image alt="" className={styles.BandImage} src={props.image.includes("http") ? props.image : `http://localhost:8080/logos/${props.image}`} width="150" height="150" />
        </div>
        <div>
          <div className={styles.title}>
            <h1>{props.bandName}</h1>
            {props.user && (
              <div className={isStarred ? styles.starYellow : styles.starGrey} onClick={handleStar}>
                <Star />
              </div>
            )}
          </div>
          <section className={styles.description}>
            <h2>{props.genre}</h2>
            <p>{props.description}</p>
          </section>
        </div>
        <section className={styles.memberList}>
          <h3>Members</h3>
          <ul>
            {props.members.length &&
              props.members.map((member) => (
                <li key={member}>
                  <MemberCard member={member} />
                </li>
              ))}
          </ul>
        </section>
      </div>
    </article>
  );
}

export default BandSingleView;
