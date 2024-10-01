import styles from "./styles.module.css";

export const CardRating = ({ stars }: { stars: number }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        paddingTop: 32,
      }}
    >
      <div className={styles.stars}>
        {Array.from({ length: stars }).map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>
    </div>
  );
};
