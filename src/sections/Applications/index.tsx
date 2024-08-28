import { TypographyBody, TypographySubtitle } from "@/components/typography";
import styles from "./styles.module.css";
import { Button } from "@/components/button";

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
import Image from "next/image";

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
        <TypographySubtitle>APLICAÇÕES</TypographySubtitle>
        <TypographyBody
          style={{
            textAlign: "center",
            fontSize: "24px",
            color: "#363636",
          }}
        >
          A satisfação de nossos(as) clientes é a parte mais importante do
          negócio!
        </TypographyBody>

        <div className={styles.applicatinsCardsWrapper}>
          {images.map((image, index) => (
            <div className={styles.card} key={index}>
              <Image
                width={250}
                height={250}
                src={image}
                alt={`Imagem produto piercing ${index}`}
                placeholder="blur"
                blurDataURL={image.src}
              />
            </div>
          ))}
        </div>
      </div>
      <Button variant="primary" href="https://instagram.com/rainbowpiercing04">
        VER TODAS
      </Button>
    </section>
  );
};
