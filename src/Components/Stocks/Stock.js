import styles from "./Stock.module.css";

const Stock = (props) => {
  const companyName = props.company.name;
  let companyPrice = props.company.price;

  return (
    <li className={styles.stock}>
      <p>{companyName}</p>
      <p>${companyPrice}</p>
    </li>
  );
};

export default Stock;
