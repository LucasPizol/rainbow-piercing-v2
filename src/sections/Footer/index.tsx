import { SVG } from "@/components/svg";
import styles from "./styles.module.css";

import logoRainbow from "@/assets/logo-rainbow.jpg";
import Image from "next/image";
import { TypographyBody, TypographySubtitle } from "@/components/typography";
import { Button } from "@/components/button";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerDiv}>
        <div className={styles.map}>
          <div className={styles.mapDescription}>
            <div className={styles.mapDescriptionTop}>
              <TypographySubtitle>Onde estamos?</TypographySubtitle>
              <TypographyBody>
                Nos localizamos na Rua São Paulo, 56, sala 35 no 2º andar. Como
                ponto de referência, é ao lado da Caixa Econômica Federal
              </TypographyBody>
            </div>
            <Button
              styles={{
                button: {
                  display: "flex",
                  alignItems: "center",
                  textAlign: "start",
                  gap: 8,
                  color: "#fff",
                  background: "#25d366",
                },
                motion: {
                  marginTop: 20
                },
              }}
              href="https://api.whatsapp.com/send?phone=5535999422529&text=Ol%C3%A1!%20Gostaria%20de%20ver%20seu%20cat%C3%A1logo%20de%20piercings!"
            >
              <SVG.Whatsapp fill="#fff" style={{ width: 20, color: "#fff" }} />
              Entrar em contato
            </Button>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.832302835207!2d-46.5696682254923!3d-21.78675039880297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9dceede647d0f%3A0x114481fd666fcd1!2sR.%20S%C3%A3o%20Paulo%2C%2056%20-%20Centro%2C%20Po%C3%A7os%20de%20Caldas%20-%20MG%2C%2037701-752!5e0!3m2!1spt-BR!2sbr!4v1724884413240!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <Image
          width={100}
          height={100}
          src={logoRainbow.src}
          alt="Imagem logo Rainbow Piercing"
        />

        <nav>
          <a href="#inicio">Início</a>
          <a href="#qualidades">Qualidades</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#aplicacoes">Aplicações</a>
          <a href="#feedbacks">Feedbacks</a>
        </nav>

        <div>
          <a
            href="https://api.whatsapp.com/send?phone=5535999422529&text=Ol%C3%A1!%20Gostaria%20de%20ver%20seu%20cat%C3%A1logo%20de%20piercings!"
            target="_blank"
          >
            <SVG.Whatsapp
              style={{
                width: 30,
                height: 30,
                fill: "#fff",
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          </a>

          <a href="https://instagram.com/rainbowpiercing04" target="_blank">
            <SVG.Instagram
              style={{
                width: 30,
                height: 30,
                fill: "#fff",
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          </a>
        </div>

        <div
          style={{
            color: "#fff",
            fontSize: 12,
            fontWeight: 300,
          }}
        >
          <p>© 2024 Todos os direitos reservados</p>
          <p>Feito com ❤️ por Lucas Pizol</p>
        </div>
      </div>
    </footer>
  );
};
