import styles from "./SampleStyle.module.css";

const SampleStyle = () => {
  return (
    <div className={styles.container}>
      Container
      <div style={{ backgroundColor: "red", fontWeight:'bold' }}>Box</div>
    </div>
  );
};

export default SampleStyle;
