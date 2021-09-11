import styles from "./Card.module.css";
import Stocks from "../../Stocks/Stocks";
import Holdings from "../../Holdings/Holdings";
import PurchaseAndSell from "../../PurchaseAndSell/PurchaseAndSell";

const Card = ({
  cardType,
  title,
  companies,
  holdings,
  holdingsValue,
  onPurchase,
  onSell,
}) => {
  // HANDLERS
  const purchaseHandler = (newShares) => {
    onPurchase(newShares);
  };

  const sellHandler = (newShares) => {
    onSell(newShares);
  };

  return (
    <div className={styles.Card}>
      <h1>{title}</h1>
      {cardType === "stocks" && <Stocks companies={companies} />}
      {cardType === "holdings" && (
        <Holdings
          companies={companies}
          holdings={holdings}
          holdingsValue={holdingsValue}
        />
      )}
      {cardType === "purchaseandsell" && (
        <PurchaseAndSell
          companies={companies}
          holdings={holdings}
          onPurchase={purchaseHandler}
          onSell={sellHandler}
        />
      )}
    </div>
  );
};

export default Card;
