import React from "react";
import styles from "./Github.module.css";
export const GithubCard = (props) => {
  return (
    <div>
      <div>
        <div className={styles.gitcard}>
          <img className={styles.githubimg} src={props.avatar_url} alt="" />
          <div>
            <h4>{props.id}</h4>
            <h2>{props.login}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
