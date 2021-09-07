import { useState } from "react";
import styles from "./Bar.module.css";

const PurchaseBar = (props) => {
  const companies = props.companies;
  const [shares, setShares] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  function purchasedShare() {
    if (shares !== 0 && selectedCompany !== "") {
      let companyNeeded = companies.filter((obj) => {
        return obj.name === selectedCompany;
      })[0];

      let cashNeeded = shares * companyNeeded.price;
      props.onPurchase(cashNeeded, companyNeeded.name, shares);
    }
  }

  function shareNumberHandler(event) {
    let numberOfShares = event.target.value;
    setShares(numberOfShares);
  }

  function companyNameHandler(event) {
    let companyName = event.target.value;
    setSelectedCompany(companyName);
  }

  return (
    <div className={styles.Bar}>
      Buy{" "}
      <input
        type="number"
        defaultValue=""
        min="0"
        step="0"
        onChange={shareNumberHandler}
      />{" "}
      shares of{" "}
      <select name="companyName" id="" onChange={companyNameHandler}>
        <option hidden disabled selected value>
          {" "}
          -- company name --{" "}
        </option>
        <option value="IBM">IBM</option>
        <option value="Amazon">Amazon</option>
        <option value="Microsoft">Microsoft</option>
        <option value="Disney">Disney</option>
      </select>
      <button onClick={purchasedShare} type="submit">
        Purchase
      </button>
    </div>
  );
};

export default PurchaseBar;
