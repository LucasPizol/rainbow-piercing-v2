import Image from "next/image";

import imgLogo from "@/assets/logo-rainbow.jpg";
import { SVG } from "@/components/svg";
import { navLinks } from "@/config/navigation";
import { site } from "@/config/site";

import { HeaderComponent } from "./HeaderComponent";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <HeaderComponent>
      <a href="#inicio" className={styles.brand} aria-label={site.name}>
        <Image
          src={imgLogo.src}
          alt={`Logo ${site.name}`}
          width={60}
          height={60}
        />
      </a>

      <nav>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a
        className={styles.headerCta}
        href={site.links.whatsappBooking}
        target="_blank"
      >
        <SVG.Whatsapp style={{ width: 18, fill: "#fff" }} />
        <span>Agendar</span>
      </a>
    </HeaderComponent>
  );
};
