import { Reveal } from "@/components/anim/Reveal";
import { TypographySubtitle } from "@/components/typography";
import { yearsInBusiness } from "@/config/site";

import styles from "./styles.module.css";

export const Problem = () => {
  const years = yearsInBusiness();

  return (
    <section className={styles.problemSection} id="por-que">
      <Reveal className={styles.wrapper} selector="h2, p" staggerBy={120}>
        <TypographySubtitle className={styles.title}>
          Todo mundo conhece alguém que se arrependeu
        </TypographySubtitle>

        <div className={styles.text}>
          <p>
            O furo que inchou e nunca fechou direito. A joia que escureceu em
            duas semanas. A orelha que criou aquela bolinha do lado e ninguém
            soube explicar o porquê. Quase sempre a causa é a mesma: material
            barato e aplicação feita no chute.
          </p>

          <p>
            Níquel em contato com pele viva inflama. Haste do tamanho errado
            pressiona o furo e vira rejeição. Aplicação sem material descartável
            é risco que nem deveria estar na conversa.
          </p>

          <p className={styles.highlight}>
            Em {years} anos, a gente construiu o trabalho justamente em cima do
            oposto disso: joia certificada, medida antes de furar e alguém do
            outro lado do WhatsApp até o dia em que cicatriza.
          </p>
        </div>
      </Reveal>
    </section>
  );
};
