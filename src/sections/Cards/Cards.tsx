import { Reveal } from "@/components/anim/Reveal";
import { SVG } from "@/components/svg";
import { TypographyBody, TypographySubtitle } from "@/components/typography";

import styles from "./styles.module.css";

const cardsContent = [
  {
    title: "Joia que o corpo aceita",
    content:
      "Titânio, aço cirúrgico, ouro e prata 925. Nada de bijuteria com níquel, que é o que inflama o furo e escurece em duas semanas.",
    icon: SVG.Certified,
  },
  {
    title: "Medida antes do furo",
    content:
      "Marcamos, conferimos a anatomia e escolhemos a espessura certa da haste. Material descartável, do começo ao fim, na sua frente.",
    icon: SVG.Help,
    type: "primary",
  },
  {
    title: "Acompanhamento até cicatrizar",
    content:
      "Você sai com as instruções de cuidado e o WhatsApp aberto. Qualquer coisa estranha na cicatrização, é só chamar.",
    icon: SVG.Delivery,
  },
];

export const Cards = () => {
  return (
    <section className={styles.cardsSection} id="qualidades">
      <Reveal className={styles.header} selector="h2, p" staggerBy={110}>
        <TypographySubtitle className={styles.title}>
          O que você leva além do piercing
        </TypographySubtitle>
        <TypographyBody className={styles.subtitle}>
          Três coisas que separam uma aplicação bem feita de um problema de seis
          meses.
        </TypographyBody>
      </Reveal>

      <Reveal
        className={styles.cardsWrapper}
        selector={`.${styles.card}`}
        staggerBy={130}
        distance={44}
      >
        {cardsContent.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              card.type === "primary" ? styles.primary : ""
            }`}
          >
            <card.icon
              style={{
                width: 64,
                height: 64,
                alignSelf: "center",
                fill: card.type === "primary" ? "#fff" : "var(--primary)",
              }}
            />

            <TypographyBody
              style={{
                fontWeight: 700,
                fontSize: 21,
                lineHeight: 1.25,
              }}
            >
              {card.title}
            </TypographyBody>
            <TypographyBody style={{ lineHeight: 1.55, opacity: 0.9 }}>
              {card.content}
            </TypographyBody>
          </div>
        ))}
      </Reveal>
    </section>
  );
};
