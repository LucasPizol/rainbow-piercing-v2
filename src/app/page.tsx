import { Header } from "@/sections/Header";
import { HomeSection } from "@/sections/Home";
import { Materials } from "@/sections/Materials";
import { Cards } from "@/sections/Cards/Cards";
import { Catalog } from "@/sections/Catalog";
import { Applications } from "@/sections/Applications";
import { Feedbacks } from "@/sections/Feedbacks";
import { Footer } from "@/sections/Footer";
import "./page.css";

export default function Home() {
  return (
    <main
      style={{
        overflowX: "hidden",
      }}
    >
      <Header />
      <HomeSection />
      <Materials />
      <Cards />
      <Catalog />
      <Applications />
      <Feedbacks />
      <Footer />
    </main>
  );
}
