import { TypographySubtitle } from "@/components/typography";
import styles from "./styles.module.css";
import { Button } from "@/components/button";

const applications = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
];

export const Applications = () => {
  return (
    <section className={styles.applicationsSection}>
      <div className={styles.applicationsSectionWrapper}>
        <TypographySubtitle>APLICAÇÕES</TypographySubtitle>

        <div className={styles.applicatinsCardsWrapper}>
          {applications.map((_, index) => (
            <div className={styles.card} key={index} />
          ))}
        </div>
      </div>
      <Button variant="primary">VER TODAS</Button>
    </section>
  );
};
