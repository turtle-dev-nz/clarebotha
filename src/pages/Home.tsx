import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Bio } from "../components/sections/Bio";
import { Gallery } from "../components/sections/Gallery";
import { Contact } from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
