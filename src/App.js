import { useState } from "react";
import styles from "./App.module.css";
import Card from "./Components/UI/Card/Card";

function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

function App(props) {
  const [companyArray, setCompanyArray] = useState([
    { name: "IBM", price: 82.67 },
    { name: "Amazon", price: 86.62 },
    { name: "Microsoft", price: 87.44 },
    { name: "Disney", price: 93.72 },
  ]);

  const Titles = {
    title1: "Stocks",
    title2: "Holdings",
    title3: "Purchase and Sell Stocks",
  };

  function updatePrices() {
    let newArray = [...companyArray];
    newArray.forEach((company) => {
      company.price = getRandomArbitrary(30, 180);
    });
    setCompanyArray(newArray);
  }

  const [timer, setTimer] = useState(false);

  setTimeout(() => {
    if (!timer) {
      updatePrices();
      setTimer(true);
    } else {
      setTimeout(() => {
        setTimer(false);
      }, 2000);
    }
  }, 2000);

  return (
    <div className={styles.App}>
      <div className={styles.row}>
        <Card companies={companyArray} title={Titles.title1}></Card>
        <Card companies={companyArray} title={Titles.title2}></Card>
      </div>
      <div className={styles.row}>
        <Card companies={companyArray} title={Titles.title3}></Card>
      </div>
    </div>
  );
}

export default App;
