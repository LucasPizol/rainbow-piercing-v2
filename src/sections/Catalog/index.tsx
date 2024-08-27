import { Button } from "@/components/button";
import styles from "./styles.module.css";
import { TypographyBody, TypographyTitle } from "@/components/typography";

export const Catalog = () => {
  return (
    <section className={styles.catalogSection}>
      <div className={styles.catalogSectionWrapper}>
        <TypographyTitle>NOSSOS PRODUTOS</TypographyTitle>
        <TypographyBody>
          Conheça nossos produtos e escolha o que mais combina com você. Baixe
          nosso catálogo e veja todas as opções disponíveis.
        </TypographyBody>
        <Button>BAIXAR CATÁLOGO</Button>
      </div>
    </section>
  );
};
