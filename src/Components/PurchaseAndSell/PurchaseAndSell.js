import { useState } from "react";
import PurchaseBar from "./PurchaseBar";
import SellBar from "./SellBar";
import styles from "./PurchaseAndSell.module.css";

const PurchaseAndSell = (props) => {
  const [cash, setCash] = useState(1000);
  const companies = props.companies;

  function purchaseHandler(cashNeeded, companyNeeded, shares) {
    if (cash - cashNeeded < 0) {
    } else {
      setCash(cash - cashNeeded);
      props.onAddedHolding(companyNeeded, shares);
    }
  }

  return (
    <div className={styles.PurchaseAndSell}>
      <PurchaseBar
        companies={companies}
        onPurchase={purchaseHandler}
      ></PurchaseBar>
      <SellBar companies={companies}></SellBar>
      <p>You currently have ${cash.toFixed(2)} in cash</p>
    </div>
  );
};

export default PurchaseAndSell;
