import { useState } from "react";
import styles from "./Holding.module.css";

const Holding = (props) => {
  const companyName = props.companyName;
  const numberOfShares = props.shares;

  return (
    <li className={styles.holding}>
      <p>{companyName}</p>
      <p>{numberOfShares}</p>
    </li>
  );
};

export default Holding;
