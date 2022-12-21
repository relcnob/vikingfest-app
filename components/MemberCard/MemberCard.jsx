import React from "react";
import Image from "next/image";
import styles from "./MemberCard.module.css";
import memberPlaceholder from "../../public/memberPlaceholder.png";

function MemberCard(props) {
  return (
    <article className={styles.memberCard}>
      <Image alt="picture of member" src={"https://source.unsplash.com/60x60/?portrait"} width={60} height={60} className={styles.thumbnail} />
      <h4>
        {"<- "}
        {props.member}
      </h4>
    </article>
  );
}

export default MemberCard;
