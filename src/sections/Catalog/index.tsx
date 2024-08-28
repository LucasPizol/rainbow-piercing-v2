import { Button } from "@/components/button";
import styles from "./styles.module.css";
import { TypographyBody, TypographyTitle } from "@/components/typography";
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
        <TypographyTitle>NOSSOS PRODUTOS</TypographyTitle>
        <TypographyBody>
          Conheça nossos produtos e escolha o que mais combina com você. Baixe
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
          <Button>BAIXAR CATÁLOGO</Button>
        </div>
      </div>
    </section>
  );
};
