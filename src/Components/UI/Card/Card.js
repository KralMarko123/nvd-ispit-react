import styles from "./Card.module.css";
import Stocks from "../../Stocks/Stocks";
import Holdings from "../../Holdings/Holdings";
import PurchaseAndSell from "../../PurchaseAndSell/PurchaseAndSell";
import { useEffect, useState } from "react";

const Card = (props) => {
  const cardTitle = props.title;
  const companies = props.companies;
  const holdings = props.holdings;
  const holdingsValue = props.holdingsValue;

  function purchaseHandler(newShares) {
    props.onPurchase(newShares);
  }

  return (
    <div className={styles.Card}>
      <h1>{cardTitle}</h1>
      {cardTitle === "Stocks" && <Stocks companies={companies} />}
      {cardTitle === "Holdings" && (
        <Holdings
          companies={companies}
          holdings={holdings}
          holdingsValue={holdingsValue}
        />
      )}
      {cardTitle === "Purchase and Sell Stocks" && (
        <PurchaseAndSell companies={companies} onPurchase={purchaseHandler} />
      )}
    </div>
  );
};

export default Card;
