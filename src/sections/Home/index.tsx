import Image from "next/image";

import imgPercingArgola from "@/assets/piercing-argola.png";
import imgPercingArgola2 from "@/assets/piercing-argola-2.png";
import imgPiercingTransversal from "@/assets/piercing-transversal.png";
import { Button } from "@/components/button";
import { Motion } from "@/components/motion";
import { SVG } from "@/components/svg";
import { HeroIntro } from "@/components/anim/HeroIntro";
import { SplitHeading } from "@/components/anim/SplitHeading";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { site, yearsInBusiness } from "@/config/site";

import styles from "./styles.module.css";

/** Imagens originais do hero — servem quem não roda WebGL ou pediu menos movimento. */
const StaticJewelry = () => (
  <>
    <Motion
      initial={{ scale: 0 }}
      animate={{ rotate: 270, scale: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 260, damping: 20 }}
      className={styles.imgPiercingArgolaMotion}
    >
      <Image
        width={300}
        height={200}
        src={imgPercingArgola.src}
        alt=""
        aria-hidden
      />
    </Motion>

    <Motion
      initial={{ scale: 0 }}
      animate={{ rotate: 180, scale: 1 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      }}
      className={styles.imgPiercingArgola2Motion}
    >
      <Image
        width={300}
        height={200}
        src={imgPercingArgola2.src}
        alt=""
        aria-hidden
      />
    </Motion>

    <Motion
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
      className={styles.imgPiercingTransversalMotion}
    >
      <Image
        width={300}
        height={200}
        src={imgPiercingTransversal.src}
        alt=""
        aria-hidden
      />
    </Motion>
  </>
);

export const HomeSection = () => {
  const years = yearsInBusiness();

  return (
    <section className={styles.homeSection} id="inicio">
      <div className={styles.stage} aria-hidden>
        <HeroCanvas fallback={<StaticJewelry />} />
      </div>

      <HeroIntro className={styles.content}>
        <p className={styles.eyebrow} data-hero-item>
          {site.city} · {site.state} — há {years} anos
        </p>

        <SplitHeading className="typography-title">
          Piercing que cicatriza bem começa na joia certa
        </SplitHeading>

        <p className={styles.lead} data-hero-item>
          Titânio, aço cirúrgico, ouro e prata 925 aplicados com material
          estéril e descartável. É a diferença entre cicatrizar em semanas e
          brigar com o furo por meses.
        </p>

        <div className={styles.actions} data-hero-item>
          <Button
            variant="primary"
            size="lg"
            href={site.links.whatsappBooking}
            eventProps={{
              action: "click",
              category: "cta_button",
              label: "hero_agendar_whatsapp",
            }}
            styles={{
              button: { display: "flex", alignItems: "center", gap: 8 },
              motion: {},
            }}
          >
            <SVG.Whatsapp style={{ width: 20, fill: "#fff" }} />
            <span>AGENDAR MINHA APLICAÇÃO</span>
          </Button>

          <Button
            size="lg"
            href={site.links.instagram}
            eventProps={{
              action: "click",
              category: "cta_button",
              label: "hero_instagram",
            }}
            styles={{
              button: {
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 700,
              },
              motion: {},
            }}
          >
            <SVG.Instagram isGradient style={{ width: 20, fill: "#fff" }} />
            <span className={styles.gradientText}>VER O CATÁLOGO</span>
          </Button>
        </div>

        <p className={styles.cue} data-hero-item>
          Atendimento no WhatsApp — orçamento sem compromisso.
        </p>
      </HeroIntro>
    </section>
  );
};
