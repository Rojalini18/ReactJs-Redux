import React from "react";
import styles from "./Github.module.css";

const GithubPage = (props) => {
  return (
    <div>
      <div className={styles.card}>
        <img className={styles.git} src={props.owner.avatar_url} alt="" />
        <div>
          <h2>{props.name}</h2>
          <h4>{props.language}</h4>
        </div>
      </div>
    </div>
  );
};

export default GithubPage;
