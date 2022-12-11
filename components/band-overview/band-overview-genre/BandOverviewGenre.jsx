import React from "react";
import Image from "next/image";
import Anchor from "../../Anchor";
import styles from "./BandOverviewGenre.module.css";
import imagePlaceholder from "../../../public/imagePlaceholder.png";
function BandOverviewGenre(props) {
  return (
    <article>
      <h1 className={styles.h1}>{props.genre}</h1>
      <ul className={styles.list}>
        <li>
          <Anchor href="/band">
            <Image alt="band-name" src={imagePlaceholder} />
            {/*             <div className={styles.imagePlaceholder}></div> */}
          </Anchor>
        </li>
        <li>
          <Anchor href="/band">
            <Image alt="band-name" src={imagePlaceholder} />
            {/*             <div className={styles.imagePlaceholder}></div> */}
          </Anchor>
        </li>
        <li>
          <Anchor href="/band">
            <Image alt="band-name" src={imagePlaceholder} />
            {/*             <div className={styles.imagePlaceholder}></div> */}
          </Anchor>
        </li>
        <li>
          <Anchor href="/band">
            <Image alt="band-name" src={imagePlaceholder} />
            {/*             <div className={styles.imagePlaceholder}></div> */}
          </Anchor>
        </li>
        <li>
          <Anchor href="/band">
            <Image alt="band-name" src={imagePlaceholder} />
            {/*             <div className={styles.imagePlaceholder}></div> */}
          </Anchor>
        </li>
        <li>
          <Anchor href="/band">
            <Image alt="band-name" src={imagePlaceholder} />
            {/*             <div className={styles.imagePlaceholder}></div> */}
          </Anchor>
        </li>
        <li>
          <Anchor href="/band">
            <Image alt="band-name" src={imagePlaceholder} />
            {/*             <div className={styles.imagePlaceholder}></div> */}
          </Anchor>
        </li>
      </ul>
    </article>
  );
}

export default BandOverviewGenre;
