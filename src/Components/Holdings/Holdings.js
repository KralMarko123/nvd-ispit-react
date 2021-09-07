import styles from "./Holdings.module.css";
import Holding from "./Holding";
import { useState } from "react";

const Holdings = (props) => {
  const companies = props.companies;
  const holdings = props.holdings;

  const [holdingsValue, setHoldingsValue] = useState((prevState) => {
    let holdingSum = 0;
    for (let i = 0; i < companies.length; i++) {
      holdingSum += holdings[i].shares * companies[i].price;
    }
    return holdingSum;
  });

  return (
    <div>
      <ul className={styles.holdings}>
        <Holding company={companies[0]} holding={holdings[0]}></Holding>
        <Holding company={companies[1]} holding={holdings[1]}></Holding>
        <Holding company={companies[2]} holding={holdings[2]}></Holding>
        <Holding company={companies[3]} holding={holdings[3]}></Holding>
      </ul>
      <p className={styles.holdingsValue}>
        Total value of holdings: <span>${holdingsValue.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default Holdings;
