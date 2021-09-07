import styles from "./Bar.module.css";

const SellBar = (props) => {
  return (
    <div className={styles.Bar}>
      Sell <input type="number" step="0" /> shares of{" "}
      <select name="companyName" id="">
        <option hidden disabled selected value>
          {" "}
          -- company name --{" "}
        </option>
        <option value="IBM">IBM</option>
        <option value="Amazon">Amazon</option>
        <option value="Microsoft">Microsoft</option>
        <option value="Disney">Disney</option>
      </select>
      <button type="submit">Sell</button>
    </div>
  );
};

export default SellBar;
