import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111111] overflow-x-hidden">
      <Cursor light />
      <Navbar />
      <Hero />
      <Work />
      <About compact />
      <Contact />
      <Footer />
    </main>
  );
}
