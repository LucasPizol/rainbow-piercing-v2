import { Applications } from "@/sections/Applications";
import { Cards } from "@/sections/Cards/Cards";
import { Catalog } from "@/sections/Catalog";
import { Faq } from "@/sections/Faq";
import { Feedbacks } from "@/sections/Feedbacks";
import { FinalCta } from "@/sections/FinalCta";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HomeSection } from "@/sections/Home";
import { Materials } from "@/sections/Materials";
import { Problem } from "@/sections/Problem";
import { TrustBar } from "@/sections/TrustBar";

import "./page.css";

/**
 * Sem isso, a página seria renderizada uma única vez no build e os "N anos"
 * congelariam na data do deploy — exatamente o problema que estamos corrigindo.
 * Regenerando a cada 12h, a virada de ano entra sozinha.
 */
export const revalidate = 43200;

export default function Home() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <Header />
      <HomeSection />
      <TrustBar />
      <Materials />
      <Problem />
      <Cards />
      <Catalog />
      <Applications />
      <Feedbacks />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
