import { useState } from "react";
import styles from "./Bar.module.css";

const PurchaseBar = (props) => {
  const companies = props.companies;
  const [shares, setShares] = useState(0);
  const [selectedCompany, setSelectedCompany] = useState("");

  function shareNumberHandler(event) {
    let numberOfShares = event.target.value;
    setShares(numberOfShares);
  }

  function companyNameHandler(event) {
    let companyName = event.target.value;
    setSelectedCompany(companyName);
  }

  function addedPurchaseHandler() {
    if (shares !== "" && selectedCompany !== "") {
      const newShares = {
        name: selectedCompany,
        shares: shares,
      };
      props.onPurchase(newShares);
    }
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
      <select name="companyName" onChange={companyNameHandler}>
        <option hidden></option>
        <option>IBM</option>
        <option>Amazon</option>
        <option>Microsoft</option>
        <option>Disney</option>
      </select>
      <button type="submit" onClick={addedPurchaseHandler}>
        Purchase
      </button>
    </div>
  );
};

export default PurchaseBar;
