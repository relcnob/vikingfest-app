import React from "react";
import Image from "next/image";
import styles from "./BandSingleView.module.css";
import MemberCard from "../MemberCard/MemberCard";
import placeholdImageBandView from "../../public/placeholdImageBandView.png";
import favourites from "../../public/favouriteIcon.svg";

function BandSingleView(props) {
  console.log(props.members);
  return (
    <article className={styles.BandView}>
      <div className="container">
        <div className={styles.top}>
          <button>{"<"}</button>
          <Image alt="" className={styles.BandImage} src={placeholdImageBandView} width="150" height="150" />
        </div>
        <div>
          <div className={styles.title}>
            <h1>{props.bandName}</h1>
            <Image alt="star" src={favourites} />
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
