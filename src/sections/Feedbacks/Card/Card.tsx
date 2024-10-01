import { ReactNode } from "react";
import styles from "./styles.module.css";

export const Card = ({ children }: { children: ReactNode }) => {
  return <div className={styles.card}>{children}</div>;
};
