import React from "react";
import styles from "./Spinner.module.scss";
import spinner from "../../assets/spinner.gif";

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <img src={spinner} alt="loading" />
    </div>
  );
}
