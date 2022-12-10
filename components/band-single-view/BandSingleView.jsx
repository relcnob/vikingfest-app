import React from "react";
import Image from "next/image";
import styles from "./BandSingleView.module.css";
import MemberCard from "../MemberCard/MemberCard";

function BandSingleView(props) {
  return (
    <section className={styles.BandView}>
      <div className="container">
        <div>
          <div className={styles.imgAndBtn}>
            <button>{"<"}</button>
            <Image alt="" className={styles.BandImage} src="/image.png" width="150" height="150" />
          </div>
          <div className={styles.h1AndStar}>
            <h1>{props.bandName}</h1>
            <Image alt="star" />
          </div>
          <section>
            <h2>{props.genre}</h2>
            <p>{props.description}</p>
          </section>
          <section className={styles.memberList}>
            <h3>Members</h3>
            <ul>
              <li>
                <MemberCard members={props.members} />
              </li>
              <li>
                <MemberCard members={props.members} />
              </li>
              <li>
                <MemberCard members={props.members} />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}

export default BandSingleView;
