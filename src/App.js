import { useState } from "react";
import styles from "./App.module.css";
import Card from "./Components/UI/Card/Card";

/*HELPER FUNCTIONS*/
const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

const App = () => {
  /*VARIABLES*/
  const [companyArray, setCompanyArray] = useState([
    { name: "IBM", price: 82.67 },
    { name: "Amazon", price: 86.62 },
    { name: "Microsoft", price: 87.44 },
    { name: "Disney", price: 93.72 },
  ]);
  const [holdingsArray, setHoldingsArray] = useState([
    { name: "IBM", shares: 0 },
    { name: "Amazon", shares: 0 },
    { name: "Microsoft", shares: 0 },
    { name: "Disney", shares: 0 },
  ]);
  const [holdingsValue, setHoldingsValue] = useState(0);
  const [timer, setTimer] = useState(false);

  /*HANDLERS*/
  const updatePrices = () => {
    let newArray = [...companyArray];
    newArray.forEach((company) => {
      company.price = getRandomArbitrary(30, 180);
    });
    setCompanyArray(newArray);
  };

  const calculateNewHoldingsValue = () => {
    let holdingsSum = 0;
    for (let i = 0; i < holdingsArray.length; i++) {
      holdingsSum +=
        parseFloat(companyArray[i].price) * parseFloat(holdingsArray[i].shares);
    }

    setHoldingsValue(holdingsSum);
  };

  /**TIMER (CAN BE OPTIMISED FOR SURE) */
  setTimeout(() => {
    if (!timer) {
      updatePrices();
      calculateNewHoldingsValue();
      setTimer(true);
    } else {
      setTimeout(() => {
        setTimer(false);
      }, 2000);
    }
  }, 2000);

  /**HANDLERS */
  const purchaseHandler = (newShares) => {
    let newArray = [...holdingsArray];
    newArray.forEach((element) => {
      if (element.name === newShares.name) {
        element.shares += parseFloat(newShares.shares);
      }
    });
    setHoldingsArray(newArray);
    calculateNewHoldingsValue();
  };

  const sellHandler = (newShares) => {
    let newArray = [...holdingsArray];
    newArray.forEach((element) => {
      if (element.name === newShares.name) {
        if (element.shares - parseFloat(newShares.shares) < 0) {
          element.shares = 0;
        } else {
          element.shares -= parseFloat(newShares.shares);
        }
      }
    });
    setHoldingsArray(newArray);
    calculateNewHoldingsValue();
  };

  return (
    <div className={styles.App}>
      <div className={styles.row}>
        <Card companies={companyArray} title="Stocks"></Card>
        <Card
          companies={companyArray}
          title="Holdings"
          holdings={holdingsArray}
          holdingsValue={holdingsValue}
        ></Card>
      </div>
      <div className={styles.row}>
        <Card
          companies={companyArray}
          holdings={holdingsArray}
          title="Purchase and Sell Stocks"
          onPurchase={purchaseHandler}
          onSell={sellHandler}
        ></Card>
      </div>
    </div>
  );
};

export default App;
