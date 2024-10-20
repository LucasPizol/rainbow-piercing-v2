import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rainbow Piercing",
  description:
    "Os melhores piercing de Poços de Caldas e região. Adquira já o seu!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <script
          type="text/javascript"
          data-cmp-ab="1"
          src="https://cdn.consentmanager.net/delivery/autoblocking/664eeacd41ece.js"
          data-cmp-host="b.delivery.consentmanager.net"
          data-cmp-cdn="cdn.consentmanager.net"
          data-cmp-codesrc="16"
        ></script>
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
