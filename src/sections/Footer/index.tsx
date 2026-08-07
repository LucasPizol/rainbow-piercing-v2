import Image from "next/image";

import logoRainbow from "@/assets/logo-rainbow.jpg";
import { Button } from "@/components/button";
import { SVG } from "@/components/svg";
import { TypographyBody, TypographySubtitle } from "@/components/typography";
import { currentYear, site } from "@/config/site";
import { navLinks } from "@/config/navigation";

import styles from "./styles.module.css";

export const Footer = () => {
  const { address } = site;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerDiv}>
        <div className={styles.map}>
          <div className={styles.mapDescription}>
            <div className={styles.mapDescriptionTop}>
              <TypographySubtitle>Onde estamos?</TypographySubtitle>
              <TypographyBody>
                {address.street}, {address.complement}, em {site.city}/
                {site.state}. Como ponto de referência, é {address.landmark}.
              </TypographyBody>
            </div>
            <Button
              href={site.links.whatsappBooking}
              eventProps={{
                action: "click",
                category: "cta_button",
                label: "footer_whatsapp",
              }}
              styles={{
                button: {
                  display: "flex",
                  alignItems: "center",
                  textAlign: "start",
                  gap: 8,
                  color: "#fff",
                  background: "#25d366",
                  fontWeight: 700,
                },
                motion: { marginTop: 20 },
              }}
            >
              <SVG.Whatsapp fill="#fff" style={{ width: 20, color: "#fff" }} />
              ENTRAR EM CONTATO
            </Button>
          </div>
          <iframe
            title={`Mapa da localização da ${site.name}`}
            src={site.links.maps}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <Image
          width={100}
          height={100}
          src={logoRainbow.src}
          alt={`Logo ${site.name}`}
        />

        <nav>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div>
          <a
            href={site.links.whatsapp}
            target="_blank"
            aria-label="Falar no WhatsApp"
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

          <a
            href={site.links.instagram}
            target="_blank"
            aria-label="Ver o Instagram"
          >
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

        <div className={styles.legal}>
          <p>
            © {currentYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p>Feito com ❤️ por {site.author}</p>
        </div>
      </div>
    </footer>
  );
};
