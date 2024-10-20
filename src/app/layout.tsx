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
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TKVRS8F6MW"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-TKVRS8F6MW');
</script>`,
          }}
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
