import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="portfolio-cursor min-h-screen bg-[#080808] text-white overflow-x-hidden">
      <Cursor />
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_75%_18%,rgba(0, 114, 252,0.16),transparent_40%)]" />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
