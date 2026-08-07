import Image from "next/image";

import produto01 from "@/assets/produtos/produto-01.jpeg";
import produto02 from "@/assets/produtos/produto-02.jpeg";
import produto03 from "@/assets/produtos/produto-03.jpeg";
import produto04 from "@/assets/produtos/produto-04.jpeg";
import produto05 from "@/assets/produtos/produto-05.jpeg";
import produto06 from "@/assets/produtos/produto-06.jpeg";
import produto07 from "@/assets/produtos/produto-07.jpeg";
import produto08 from "@/assets/produtos/produto-08.jpeg";
import produto09 from "@/assets/produtos/produto-09.jpeg";
import produto10 from "@/assets/produtos/produto-10.jpeg";
import produto11 from "@/assets/produtos/produto-11.jpeg";
import produto12 from "@/assets/produtos/produto-12.jpeg";
import { Reveal } from "@/components/anim/Reveal";
import { Button } from "@/components/button";
import { TypographyBody, TypographySubtitle } from "@/components/typography";
import { site } from "@/config/site";

import styles from "./styles.module.css";

const images = [
  produto01,
  produto02,
  produto03,
  produto04,
  produto05,
  produto06,
  produto07,
  produto08,
  produto09,
  produto10,
  produto11,
  produto12,
];

export const Catalog = () => {
  return (
    <section className={styles.catalogSection} id="catalogo">
      <div className={styles.catalogSectionWrapper}>
        <Reveal className={styles.header} selector="h2, p" staggerBy={120}>
          <TypographySubtitle>Escolha a sua joia</TypographySubtitle>
          <TypographyBody>
            Argolas, barbells, labrets e piercings com pedra — em titânio, aço
            cirúrgico, ouro e prata 925. O catálogo completo, com preços, sai na
            hora pelo WhatsApp.
          </TypographyBody>
        </Reveal>

        <Reveal
          className={styles.products}
          selector={`.${styles.product}`}
          staggerBy={55}
          distance={34}
        >
          {images.map((image, index) => (
            <div key={index} className={styles.product}>
              <Image
                width={250}
                height={250}
                src={image}
                alt={`Joia de piercing disponível no catálogo da ${site.name} — modelo ${index + 1}`}
                placeholder="blur"
                blurDataURL={image.src}
              />
            </div>
          ))}
        </Reveal>

        <Reveal className={styles.action}>
          <Button
            href={site.links.whatsappCatalog}
            eventProps={{
              action: "click",
              category: "cta_button",
              label: "catalogo_whatsapp",
            }}
            styles={{
              button: {
                display: "flex",
                alignItems: "center",
                textAlign: "start",
                gap: 8,
                fontWeight: 700,
              },
              motion: { marginTop: 20 },
            }}
          >
            <span style={{ color: "var(--primary)" }}>
              RECEBER O CATÁLOGO COMPLETO
            </span>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};
