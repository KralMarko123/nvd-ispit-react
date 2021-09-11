import styles from "./Stocks.module.css";
import Stock from "./Stock";

const Stocks = ({ companies }) => {
  return (
    <ul className={styles.stocks}>
      {companies.map((company) => (
        <Stock companyName={company.name} companyPrice={company.price} />
      ))}
    </ul>
  );
};

export default Stocks;
