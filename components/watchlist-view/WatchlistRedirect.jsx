import React from "react";
import Anchor from "../Anchor";

function WatchlistRedirect() {
  return (
    <div>
      <h1>You must be logged in to have access to the watchlist</h1>
      <Anchor href={"/signin"} className={s.link}>
        Sign in
      </Anchor>
      <Anchor href={"/"} className={s.link}>
        Back to schedule
      </Anchor>
    </div>
  );
}

export default WatchlistRedirect;
