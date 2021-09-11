import styles from "./Holding.module.css";

const Holding = ({ companyName, shares }) => {
  return (
    <li className={styles.holding}>
      <p>{companyName}</p>
      <p>{shares}</p>
    </li>
  );
};

export default Holding;
