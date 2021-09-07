import { useState } from "react";
import styles from "./Holding.module.css";

const Holding = (props) => {
  const companyName = props.company.name;
  const numberOfHoldings = props.holding.shares;

  return (
    <li className={styles.holding}>
      <p>{companyName}</p>
      <p>{numberOfHoldings}</p>
    </li>
  );
};

export default Holding;
