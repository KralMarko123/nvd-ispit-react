import styles from "./Stock.module.css";

const Stock = ({ companyName, companyPrice }) => {
  return (
    <li className={styles.stock}>
      <p>{companyName}</p>
      <p>${companyPrice.toFixed(2)}</p>
    </li>
  );
};

export default Stock;
