import styles from "./Bar.module.css";

const SellBar = (props) => {
  return (
    <div className={styles.Bar}>
      Sell <input type="number" step="0" /> shares of{" "}
      <select name="companyName">
        <option hidden></option>
        <option>IBM</option>
        <option>Amazon</option>
        <option>Microsoft</option>
        <option>Disney</option>
      </select>
      <button type="submit">Sell</button>
    </div>
  );
};

export default SellBar;
