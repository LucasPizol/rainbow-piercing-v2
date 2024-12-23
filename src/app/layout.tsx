import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rainbow Piercing - Poços de Caldas",
  description:
    "Os melhores piercings de Poços de Caldas e região. Adquira já o seu!",
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
        <title>Rainbow Piercing - Poços de Caldas</title>
        <meta
          name="description"
          content="Os melhores piercings de Poços de Caldas e região. Adquira já o seu!"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PH66SSNWFD"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PH66SSNWFD');`,
          }}
        ></script>
        <meta
          property="og:title"
          content="Rainbow Piercing | Poços de Caldas"
        ></meta>
        <meta
          property="og:url"
          content="https://www.rainbowpiercing.com.br/"
        ></meta>
        <meta property="og:site_name" content="Rainbow Piercing"></meta>
        <meta property="og:type" content="website"></meta>
      </head>
      <body>{children}</body>
    </html>
  );
}
