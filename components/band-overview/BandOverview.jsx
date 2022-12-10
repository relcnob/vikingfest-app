import React from "react";
import Image from "next/image";
import Anchor from "../Anchor";
import styles from "./BandOverview.module.css";
function BandOverview() {
  return (
    <section>
      <div className="container">
        <h1 className={styles.h1}>Metal</h1>
        <ul className={styles.list}>
          <li>
            <Anchor href="/band">
              {/* <Image alt="band-name"/> */}
              <div className={styles.imagePlaceholder}></div>
            </Anchor>
          </li>
          <li>
            <Anchor href="/band">
              {/* <Image alt="band-name"/> */}
              <div className={styles.imagePlaceholder}></div>
            </Anchor>
          </li>
          <li>
            <Anchor href="/band">
              {/* <Image alt="band-name"/> */}
              <div className={styles.imagePlaceholder}></div>
            </Anchor>
          </li>
          <li>
            <Anchor href="/band">
              {/* <Image alt="band-name"/> */}
              <div className={styles.imagePlaceholder}></div>
            </Anchor>
          </li>
          <li>
            <Anchor href="/band">
              {/* <Image alt="band-name"/> */}
              <div className={styles.imagePlaceholder}></div>
            </Anchor>
          </li>
          <li>
            <Anchor href="/band">
              {/* <Image alt="band-name"/> */}
              <div className={styles.imagePlaceholder}></div>
            </Anchor>
          </li>
          <li>
            <Anchor href="/band">
              {/* <Image alt="band-name"/> */}
              <div className={styles.imagePlaceholder}></div>
            </Anchor>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BandOverview;
