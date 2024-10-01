import { ReactNode } from "react";
import styles from "./styles.module.css";

export const CardAvatar = ({ children }: { children: ReactNode }) => {
  return <div className={styles.avatar}>{children}</div>;
};
