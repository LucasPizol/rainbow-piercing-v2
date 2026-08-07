import { Reveal } from "@/components/anim/Reveal";
import { Button } from "@/components/button";
import { SVG } from "@/components/svg";
import { site, yearsInBusiness } from "@/config/site";

import styles from "./styles.module.css";

export const FinalCta = () => {
  const years = yearsInBusiness();

  return (
    <section className={styles.ctaSection} id="agendar">
      {/* O botão entra pela div externa: animar o próprio <a> brigaria com o
          transform que o framer-motion aplica no hover. */}
      <Reveal
        className={styles.wrapper}
        selector="[data-reveal-item]"
        staggerBy={110}
      >
        <h2 className={styles.title} data-reveal-item>
          Manda uma mensagem dizendo o que você quer furar
        </h2>

        <p className={styles.lead} data-reveal-item>
          A gente responde com a joia indicada, o preço fechado e os horários
          livres. Sem compromisso — e sem aquele orçamento que muda quando você
          chega no balcão.
        </p>

        <div className={styles.buttonWrap} data-reveal-item>
        <Button
          variant="primary"
          size="lg"
          href={site.links.whatsappBooking}
          eventProps={{
            action: "click",
            category: "cta_button",
            label: "cta_final_whatsapp",
          }}
          styles={{
            button: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              fontSize: 20,
              width: "100%",
            },
            motion: { width: "100%", maxWidth: 380 },
          }}
        >
          <SVG.Whatsapp style={{ width: 22, fill: "#fff" }} />
          <span>FALAR NO WHATSAPP</span>
        </Button>
        </div>

        <p className={styles.cue} data-reveal-item>
          {site.city}/{site.state} · {years} anos de estúdio · material estéril
          aberto na sua frente
        </p>
      </Reveal>
    </section>
  );
};
