import React from "react";
import Image from "next/image";
import styles from "./MemberCard.module.css";

function MemberCard(props) {
  return (
    <article className={styles.memberCard}>
      <Image alt="picture of member" />
      <h4>{props.members[0]}</h4>
    </article>
  );
}

export default MemberCard;
