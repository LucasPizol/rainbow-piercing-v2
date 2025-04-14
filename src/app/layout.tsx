import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <title>Rainbow Piercing</title>
        <meta
          name="description"
          content="Piercings de alta qualidade – modelos exclusivos, hipoalergênicos e com aplicação profissional. Compre online ou agende sua visita"
        />

        <meta
          name="keywords"
          content="piercings, piercing, rainbow piercing, crazy, soul, piercings de qualidade, piercings hipoalergênicos, piercings exclusivos, piercings online, body piercing, agendamento de piercings"
        />

        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Rainbow Piercing" />
        <meta property="og:region" content="Brasil" />
        <meta property="og:url" content="https://www.rainbowpiercing.com.br/" />
        <meta property="og:site_name" content="Rainbow Piercing" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Piercings de alta qualidade – modelos exclusivos, hipoalergênicos e com aplicação profissional. Compre online ou agende sua visita"
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
      </head>
      <body>{children}</body>
    </html>
  );
}
