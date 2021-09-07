import styles from "./Card.module.css";
import Stocks from "../../Stocks/Stocks";
import Holdings from "../../Holdings/Holdings";
import PurchaseAndSell from "../../PurchaseAndSell/PurchaseAndSell";
import { useState } from "react";

const Card = (props) => {
  const cardTitle = props.title;
  const companies = props.companies;

  const [holdingsArray, setHoldings] = useState([
    { name: "IBM", shares: 0 },
    { name: "Amazon", shares: 0 },
    { name: "Microsoft", shares: 0 },
    { name: "Disney", shares: 0 },
  ]);

  function addedHoldingHandler(companyName, addedShares) {
    let newHoldings = [...holdingsArray];

    newHoldings.forEach((holding) => {
      if (holding.name === companyName) {
        holding.shares = parseInt(holding.shares) + parseInt(addedShares);
      }
    });
    setHoldings((prevState) => {
      return newHoldings;
    });

    // setTimeout(() => {
    //   console.log(holdingsArray);
    // }, 3000);
  }

  return (
    <div className={styles.Card}>
      <h1>{cardTitle}</h1>
      {cardTitle === "Stocks" && <Stocks companies={companies} />}
      {cardTitle === "Holdings" && (
        <Holdings companies={companies} holdings={holdingsArray} />
      )}
      {cardTitle === "Purchase and Sell Stocks" && (
        <PurchaseAndSell
          companies={companies}
          onAddedHolding={addedHoldingHandler}
        />
      )}
    </div>
  );
};

export default Card;
