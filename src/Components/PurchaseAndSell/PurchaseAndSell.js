import { useState } from "react";
import PurchaseBar from "./PurchaseBar";
import SellBar from "./SellBar";
import styles from "./PurchaseAndSell.module.css";

const PurchaseAndSell = (props) => {
  const [cash, setCash] = useState(1000);
  const companies = props.companies;
  const holdings = props.holdings;

  function purchaseHandler(newShares) {
    for (let i = 0; i < companies.length; i++) {
      if (companies[i].name === newShares.name) {
        let cashToRemove = companies[i].price * newShares.shares;
        if (cash - cashToRemove >= 0) {
          setCash(cash - cashToRemove);
          props.onPurchase(newShares);
          break;
        }
      }
    }
  }

  function sellHandler(newShares) {
    for (let i = 0; i < holdings.length; i++) {
      if (holdings[i].name === newShares.name) {
        if (holdings[i].shares > 0) {
          let cashToAdd = companies[i].price * newShares.shares;
          setCash(cash + cashToAdd);
          props.onSell(newShares);
          break;
        }
      }
    }
  }

  return (
    <div className={styles.PurchaseAndSell}>
      <PurchaseBar
        companies={companies}
        onPurchase={purchaseHandler}
      ></PurchaseBar>
      <SellBar companies={companies} onSell={sellHandler}></SellBar>
      <p>You currently have ${cash.toFixed(2)} in cash</p>
    </div>
  );
};

export default PurchaseAndSell;