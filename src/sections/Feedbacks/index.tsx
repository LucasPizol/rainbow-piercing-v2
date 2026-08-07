import Girl01 from "@/assets/svg/Girl-01.svg";
import Girl02 from "@/assets/svg/Girl-02.svg";
import GirlPinkHair from "@/assets/svg/GirlPinkHair.svg";
import { Reveal } from "@/components/anim/Reveal";
import { Button } from "@/components/button";
import { TypographyBody, TypographySubtitle } from "@/components/typography";
import { site } from "@/config/site";

import { Card } from "./Card/Card";
import { CardAvatar } from "./Card/CardAvatar";
import { CardDescription } from "./Card/CardDescription";
import { CardRating } from "./Card/CardRating";
import { CardTitle } from "./Card/CardTitle";
import cardStyles from "./Card/styles.module.css";
import styles from "./styles.module.css";

const feedbacks = [
  {
    name: "Adriana",
    role: "conch",
    feedback:
      "Realmente, parece milagre! O meu conch, na mesma semana resolveu o problema com sua jóia!",
    avatar: Girl01.src,
  },
  {
    name: "Samara",
    role: "primeira aplicação",
    feedback:
      "Eu quem lhe agradeço! Eu queria muito avaliar o serviço de vocês, pois são muito atenciosos, amei!",
    avatar: Girl02.src,
  },
  {
    name: "Elizabete",
    role: "troca de joia",
    feedback: "Eu amei, estão lindos! Vou arrumar vários clientes pra você!",
    avatar: GirlPinkHair.src,
  },
];

export const Feedbacks = () => {
  return (
    <section className={styles.feedbacksSection} id="feedbacks">
      <div className={styles.feedbacksWrapper}>
        <Reveal className={styles.header} selector="h2, p" staggerBy={120}>
          <TypographySubtitle className={styles.title}>
            Quem já passou por aqui
          </TypographySubtitle>
          <TypographyBody className={styles.subtitle}>
            Mensagens recebidas no WhatsApp depois da aplicação.
          </TypographyBody>
        </Reveal>

        <Reveal
          className={styles.feedbacksCardsWrapper}
          selector={`.${cardStyles.card}`}
          staggerBy={140}
          distance={40}
        >
          {feedbacks.map((feedback, index) => (
            <Card key={feedback.name}>
              <CardAvatar>
                <img
                  style={{ width: index === 0 ? "100%" : "80%" }}
                  src={feedback.avatar}
                  alt=""
                  aria-hidden
                />
              </CardAvatar>
              <CardTitle>{feedback.name}</CardTitle>
              <span className={styles.role}>{feedback.role}</span>
              <CardDescription>{feedback.feedback}</CardDescription>
              <CardRating stars={5} />
            </Card>
          ))}
        </Reveal>
      </div>

      <Button
        variant="primary"
        href={site.links.whatsappBooking}
        eventProps={{
          action: "click",
          category: "cta_button",
          label: "feedbacks_whatsapp",
        }}
        styles={{
          motion: {
            maxWidth: 350,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "0 20px",
          },
          button: {
            maxWidth: 320,
            width: "100%",
            fontSize: 22,
          },
        }}
      >
        QUERO O MEU
      </Button>
    </section>
  );
};
