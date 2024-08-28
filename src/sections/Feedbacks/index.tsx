import { TypographyBody, TypographySubtitle } from "@/components/typography";
import styles from "./styles.module.css";
import { Button } from "@/components/button";

const feedbacks = [
  {
    name: "John Doe",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    avatar: "https://randomuser.me/api/portraits",
    date: "2021-09-01",
  },
  {
    name: "John Doe",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    avatar: "https://randomuser.me/api/portraits",
    date: "2021-09-01",
  },
  {
    name: "John Doe",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    avatar: "https://randomuser.me/api/portraits",
    date: "2021-09-01",
  },
];

export const Feedbacks = () => {
  return (
    <section className={styles.feedbacksSection}>
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
            <div className={styles.card} key={index}>
              <div className={styles.avatar} />
              <TypographyBody
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                {feedback.name}
              </TypographyBody>
              <TypographyBody
                style={{
                  textAlign: "start",
                  paddingTop: 18,
                }}
              >
                {feedback.feedback}
              </TypographyBody>

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
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="primary"
        href="https://instagram.com/rainbowpiercing04"
        styles={{
          motion: {
            maxWidth: 300,
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
