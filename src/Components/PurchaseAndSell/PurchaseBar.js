import { useState } from "react";
import styles from "./Bar.module.css";

const PurchaseBar = ({ onPurchase }) => {
  const [shares, setShares] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  /**HANDLERS */
  const shareNumberHandler = (event) => {
    let numberOfShares = event.target.value;
    setShares(numberOfShares);
  };

  const companyNameHandler = (event) => {
    let companyName = event.target.value;
    setSelectedCompany(companyName);
  };

  const addedPurchaseHandler = () => {
    if (shares !== "" && selectedCompany !== "") {
      const newShares = {
        name: selectedCompany,
        shares: shares,
      };
      onPurchase(newShares);
      setSelectedCompany("");
      setShares("");
    }
  };

  return (
    <div className={styles.Bar}>
      Buy{" "}
      <input
        type="number"
        value={shares}
        min="0"
        step="0"
        onChange={shareNumberHandler}
      />{" "}
      Shares of{" "}
      <select
        name="companyName"
        onChange={companyNameHandler}
        value={selectedCompany}
      >
        <option hidden></option>
        <option>IBM</option>
        <option>Amazon</option>
        <option>Microsoft</option>
        <option>Disney</option>
      </select>
      <button onClick={addedPurchaseHandler}>Purchase</button>
    </div>
  );
};

export default PurchaseBar;
