import { Reveal } from "@/components/anim/Reveal";
import { TypographySubtitle } from "@/components/typography";
import { site, yearsInBusiness } from "@/config/site";

import styles from "./styles.module.css";

/**
 * As dúvidas que aparecem antes de alguém marcar. Usa <details> nativo:
 * abre sem JavaScript e o conteúdo continua indexável.
 */
const buildFaq = (years: number) => [
  {
    question: "Dói muito?",
    answer:
      "Depende do local, mas a maior parte das pessoas descreve como um susto de dois segundos. Agulha correta e movimento único doem muito menos do que a pistola de furar, que a gente não usa em hipótese nenhuma.",
  },
  {
    question: "Quanto tempo leva para cicatrizar?",
    answer:
      "Lóbulo costuma fechar em 6 a 8 semanas. Cartilagem, como hélix e conch, pede de 4 a 12 meses. Você recebe as instruções de cuidado por escrito e pode chamar no WhatsApp em qualquer ponto desse caminho.",
  },
  {
    question: "E se meu corpo rejeitar a joia?",
    answer:
      "É justamente por isso que só trabalhamos com titânio e aço cirúrgico implant grade, ouro e prata 925. Rejeição quase sempre vem de níquel em bijuteria ou de haste no tamanho errado — as duas coisas que a gente elimina antes de furar.",
  },
  {
    question: "Preciso agendar ou posso chegar?",
    answer:
      `O agendamento pelo WhatsApp garante o horário e evita espera. Se preferir passar no estúdio, estamos na ${site.address.street}, ${site.address.complement}, em ${site.city} — ${site.address.landmark}.`,
  },
  {
    question: "Quanto custa?",
    answer:
      "O valor muda conforme a joia e o local da aplicação. Manda uma mensagem dizendo o que você quer furar e a gente responde com o preço fechado, joia e aplicação inclusas — sem taxa surpresa no balcão.",
  },
  {
    question: "Posso levar minha própria joia?",
    answer:
      "Pode, mas conferimos o material e a medida antes. Se for algo que vá comprometer a cicatrização, a gente avisa com franqueza em vez de aplicar e deixar o problema para depois.",
  },
  {
    question: "Vocês atendem menores de idade?",
    answer:
      "Sim, acompanhados de pai, mãe ou responsável legal com documento. É exigência legal e a gente não abre exceção.",
  },
  {
    question: "Há quanto tempo vocês trabalham com isso?",
    answer:
      `São ${years} anos de estúdio em ${site.city}, com aplicação feita sempre por profissional habilitado e material descartável aberto na sua frente.`,
  },
];

export const Faq = () => {
  const faq = buildFaq(yearsInBusiness());

  return (
    <section className={styles.faqSection} id="duvidas">
      <div className={styles.wrapper}>
        <Reveal>
          <TypographySubtitle className={styles.title}>
            Antes de marcar, você deve estar se perguntando
          </TypographySubtitle>
        </Reveal>

        <Reveal
          className={styles.list}
          selector={`.${styles.item}`}
          staggerBy={70}
          distance={22}
        >
          {faq.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary className={styles.question}>
                <span>{item.question}</span>
                <span className={styles.icon} aria-hidden />
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
