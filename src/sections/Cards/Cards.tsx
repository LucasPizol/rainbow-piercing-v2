import { SVG } from "@/components/svg";
import styles from "./styles.module.css";
import { TypographyBody } from "@/components/typography";
import { Motion } from "@/components/motion";

const cardsContent = [
  {
    title: "Produtos de qualidade",
    content: "This is the content of card 1",
    icon: SVG.Certified,
  },
  {
    title: "O melhor atendimento",
    content: "This is the content of card 2",
    icon: SVG.Help,
    type: "primary",
  },
  {
    title: "Entrega rápida",
    content: "This is the content of card 3",
    icon: SVG.Delivery,
  },
];

export const Cards = () => {
  return (
    <section className={styles.cardsSection} id="qualidades">
      <div className={styles.cardsWrapper}>
        {cardsContent.map((card, index) => (
          <Motion
            initial={{ opacity: 0, transform: "translateY(50px)" }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0)",
              type: "spring",
            }}
            viewport={{
              once: true,
            }}
            key={index}
            className={`${styles.card} ${
              card.type === "primary" ? styles.primary : ""
            }`}
          >
            <card.icon
              style={{
                width: 80,
                height: 80,
                alignSelf: "center",
                fill: card.type === "primary" ? "#fff" : "var(--primary)",
              }}
            />

            <TypographyBody
              style={{
                fontWeight: 700,
                fontSize: 20,
              }}
            >
              {card.title}
            </TypographyBody>
            <TypographyBody>{card.content}</TypographyBody>
          </Motion>
        ))}
      </div>
    </section>
  );
};
