import Image from "next/image";

import aplicacao01 from "@/assets/aplicacoes/aplicacao-01.jpeg";
import aplicacao02 from "@/assets/aplicacoes/aplicacao-02.jpeg";
import aplicacao03 from "@/assets/aplicacoes/aplicacao-03.jpeg";
import aplicacao04 from "@/assets/aplicacoes/aplicacao-04.jpeg";
import aplicacao05 from "@/assets/aplicacoes/aplicacao-05.jpeg";
import aplicacao06 from "@/assets/aplicacoes/aplicacao-06.jpeg";
import aplicacao07 from "@/assets/aplicacoes/aplicacao-07.jpeg";
import aplicacao08 from "@/assets/aplicacoes/aplicacao-08.jpeg";
import aplicacao09 from "@/assets/aplicacoes/aplicacao-09.jpeg";
import aplicacao10 from "@/assets/aplicacoes/aplicacao-10.jpeg";
import { Reveal } from "@/components/anim/Reveal";
import { Button } from "@/components/button";
import { TypographyBody, TypographySubtitle } from "@/components/typography";
import { site } from "@/config/site";

import styles from "./styles.module.css";

const images = [
  aplicacao01,
  aplicacao02,
  aplicacao03,
  aplicacao04,
  aplicacao05,
  aplicacao06,
  aplicacao07,
  aplicacao08,
  aplicacao09,
  aplicacao10,
];

export const Applications = () => {
  return (
    <section className={styles.applicationsSection} id="aplicacoes">
      <div className={styles.applicationsSectionWrapper}>
        <Reveal className={styles.header} selector="h2, p" staggerBy={120}>
          <TypographySubtitle>Aplicações de verdade</TypographySubtitle>
          <TypographyBody className={styles.subtitle}>
            Fotos de clientes reais, tiradas no estúdio. É o melhor jeito de
            você ver o acabamento antes de marcar.
          </TypographyBody>
        </Reveal>

        <Reveal
          className={styles.applicatinsCardsWrapper}
          selector={`.${styles.card}`}
          staggerBy={60}
          distance={34}
        >
          {images.map((image, index) => (
            <div className={styles.card} key={index}>
              <Image
                width={250}
                height={250}
                src={image}
                alt={`Aplicação de piercing feita na ${site.name} — foto ${index + 1}`}
                placeholder="blur"
                blurDataURL={image.src}
              />
            </div>
          ))}
        </Reveal>
      </div>

      <Button
        variant="primary"
        href={site.links.instagram}
        eventProps={{
          action: "click",
          category: "cta_button",
          label: "aplicacoes_instagram",
        }}
      >
        VER MAIS NO INSTAGRAM
      </Button>
    </section>
  );
};
