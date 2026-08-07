import type { Metadata } from "next";

import { site, yearsInBusiness } from "@/config/site";

import "./globals.css";

const GA_MEASUREMENT_ID = "G-PH66SSNWFD";
const SITE_URL = "https://www.rainbowpiercing.com.br/";

/** Muda sozinho a cada virada de ano — nada de descrição envelhecida no <head>. */
const description = () =>
  `Piercings em titânio, aço cirúrgico, ouro e prata 925 com aplicação estéril em ${site.city}/${site.state}. Há ${yearsInBusiness()} anos aplicando com material descartável e acompanhamento até cicatrizar.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — piercings e aplicação em ${site.city}/${site.state}`,
    template: `%s | ${site.name}`,
  },
  description: description(),
  keywords: [
    "piercing",
    "piercings",
    `piercing ${site.city}`,
    "aplicação de piercing",
    "piercing titânio",
    "piercing aço cirúrgico",
    "piercing hipoalergênico",
    "colocar piercing",
    site.name.toLowerCase(),
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${site.name} — piercings e aplicação em ${site.city}/${site.state}`,
    description: description(),
    url: SITE_URL,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: description(),
  },
};

/** Dados estruturados para a busca local — o ano de fundação sai da mesma config. */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: site.name,
  url: SITE_URL,
  foundingDate: String(site.foundingYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.street}, ${site.address.complement}`,
    addressLocality: site.city,
    addressRegion: site.state,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
  sameAs: [site.links.instagram],
  description: description(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="theme-color" content="#6042a7" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_MEASUREMENT_ID}');`,
          }}
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
