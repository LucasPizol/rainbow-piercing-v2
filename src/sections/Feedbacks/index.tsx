import { TypographySubtitle } from "@/components/typography";
import styles from "./styles.module.css";
import { Button } from "@/components/button";
import { CardAvatar } from "./Card/CardAvatar";
import { CardTitle } from "./Card/CardTitle";
import { CardDescription } from "./Card/CardDescription";
import { CardRating } from "./Card/CardRating";
import { Card } from "./Card/Card";

import Girl01 from "@/assets/svg/Girl-01.svg";
import Girl02 from "@/assets/svg/Girl-02.svg";
import GirlPinkHair from "@/assets/svg/GirlPinkHair.svg";

const feedbacks = [
  {
    name: "Adriana",
    feedback:
      "Realmente, parece milagre! O meu conch, na mesma semana resolveou o problema com sua jóia!",
    avatar: Girl01.src,
    date: "2021-09-01",
  },
  {
    name: "Samara",
    feedback:
      "Eu quem lhe agradeço! Eu queria muito avaliar o serviço de vocês, pois são muito atenciosos, amei!",
    avatar: Girl02.src,
    date: "2021-09-01",
  },
  {
    name: "Elizabete",
    feedback:
      "Eu amei, estão lindos! Vou arrumar vários clientes pra você!",
    avatar: GirlPinkHair.src,
    date: "2021-09-01",
  },
];

export const Feedbacks = () => {
  return (
    <section className={styles.feedbacksSection} id="feedbacks">
      <div className={styles.feedbacksWrapper}>
        <TypographySubtitle
          style={{
            color: "var(--primary)",
          }}
        >
          FEEDBACKS
        </TypographySubtitle>

        <div className={styles.feedbacksCardsWrapper}>
          {feedbacks.map((feedback, index) => (
            <Card key={index}>
              <CardAvatar>
                <img
                  style={{
                    width: index === 0 ? "100%" : "80%",
                  }}
                  src={feedback.avatar}
                />
              </CardAvatar>
              <CardTitle>{feedback.name}</CardTitle>
              <CardDescription>{feedback.feedback}</CardDescription>
              <CardRating stars={5} />
            </Card>
          ))}
        </div>
      </div>

      <Button
        variant="primary"
        href="https://api.whatsapp.com/send?phone=5535999422529&text=Ol%C3%A1!%20Gostaria%20de%20ver%20seu%20cat%C3%A1logo%20de%20piercings!"
        styles={{
          motion: {
            maxWidth: 350,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "0 20px",
          },
          button: {
            maxWidth: 300,
            width: "100%",
            fontSize: 28,
          },
        }}
      >
        TAMBÉM QUERO!
      </Button>
    </section>
  );
};
