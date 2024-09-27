import { Button } from "@/components/button";
import styles from "./styles.module.css";
import {
  TypographyBody,
  TypographySubtitle,
  TypographyTitle,
} from "@/components/typography";
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
import Image from "next/image";
import { SVG } from "@/components/svg";

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
        <TypographySubtitle>NOSSOS PIERCINGS</TypographySubtitle>
        <TypographyBody>
          Conheça nossos PIERCINGS e escolha o que mais combina com você. Baixe
          nosso catálogo e veja todas as opções disponíveis.
        </TypographyBody>

        <div className={styles.products}>
          {images.map((image, index) => (
            <div key={index} style={{ width: "100%", aspectRatio: "1/1" }}>
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

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            styles={{
              button: {
                display: "flex",
                alignItems: "center",
                textAlign: "start",
                gap: 8,
                fontWeight: 700,
              },
              motion: {
                marginTop: 20,
              },
            }}
            href="https://api.whatsapp.com/send?phone=5535999422529&text=Ol%C3%A1!%20Gostaria%20de%20ver%20seu%20cat%C3%A1logo%20de%20piercings!"
          >
            <SVG.Instagram isGradient style={{ width: 20 }} />
            <span
              style={{
                background:
                  "linear-gradient(to right, #833ab4,#fd1d1d,#fcb045)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              QUERO VER MAIS!
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
