import { CountUp } from "@/components/anim/CountUp";
import { Reveal } from "@/components/anim/Reveal";
import { site, yearsInBusiness } from "@/config/site";

import styles from "./styles.module.css";

export const TrustBar = () => {
  const years = yearsInBusiness();

  const signals = [
    {
      value: <CountUp to={years} suffix=" anos" />,
      label: `aplicando em ${site.city}`,
    },
    {
      value: <CountUp to={5} decimals={1} />,
      label: "média nas avaliações de clientes",
    },
    {
      value: <CountUp to={100} suffix="%" />,
      label: "material estéril e descartável",
    },
    {
      value: <>Titânio</>,
      label: "e aço cirúrgico hipoalergênicos",
    },
  ];

  return (
    <section className={styles.trustBar} aria-label="Por que confiar na gente">
      <Reveal as="ul" className={styles.list} selector="li" staggerBy={110}>
        {signals.map((signal) => (
          <li key={signal.label} className={styles.item}>
            <strong className={styles.value}>{signal.value}</strong>
            <span className={styles.label}>{signal.label}</span>
          </li>
        ))}
      </Reveal>
    </section>
  );
};
