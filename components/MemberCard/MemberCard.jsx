import React from "react";
import Image from "next/image";
import styles from "./MemberCard.module.css";
import memberPlaceholder from "../../public/memberPlaceholder.png";

function MemberCard(props) {
  return (
    <article className={styles.memberCard}>
      <Image alt="picture of member" src={memberPlaceholder} />
      <h4>
        {"<- "}
        {props.member}
      </h4>
    </article>
  );
}

export default MemberCard;
