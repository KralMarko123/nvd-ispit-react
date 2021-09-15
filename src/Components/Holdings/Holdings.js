import styles from "./Holdings.module.css";
import Holding from "./Holding";

const Holdings = ({ companies, holdings, holdingsValue }) => {
  return (
    <div>
      <ul className={styles.holdings}>
        {companies.map((company, index) => (
          <Holding
            key={company.name}
            companyName={company.name}
            shares={holdings[index].shares}
          />
        ))}
      </ul>{" "}
      <p className={styles.holdingsValue}>
        Total value of holdings: <span>${holdingsValue.toFixed(2)}</span>{" "}
      </p>
    </div>
  );
};

export default Holdings;
