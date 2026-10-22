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
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_75%_18%,rgba(0, 114, 252,0.07),transparent_40%)]" />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
