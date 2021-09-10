import styles from "./Holdings.module.css";
import Holding from "./Holding";
import { useEffect, useState } from "react";

const Holdings = (props) => {
  const companies = props.companies;
  const holdings = props.holdings;
  const holdingsValue = props.holdingsValue.toFixed(2);

  return (
    <div>
      <ul className={styles.holdings}>
        <Holding
          companyName={companies[0].name}
          shares={holdings[0].shares}
        ></Holding>
        <Holding
          companyName={companies[1].name}
          shares={holdings[1].shares}
        ></Holding>
        <Holding
          companyName={companies[2].name}
          shares={holdings[2].shares}
        ></Holding>
        <Holding
          companyName={companies[3].name}
          shares={holdings[3].shares}
        ></Holding>
      </ul>
      <p className={styles.holdingsValue}>
        Total value of holdings: <span>${holdingsValue}</span>
      </p>
    </div>
  );
};

export default Holdings;
