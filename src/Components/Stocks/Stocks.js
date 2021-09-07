import styles from "./Stocks.module.css";
import Stock from "./Stock";

const Stocks = (props) => {
  const companies = props.companies;

  return (
    <ul className={styles.stocks}>
      <Stock company={companies[0]}></Stock>
      <Stock company={companies[1]}></Stock>
      <Stock company={companies[2]}></Stock>
      <Stock company={companies[3]}></Stock>
    </ul>
  );
};

export default Stocks;
