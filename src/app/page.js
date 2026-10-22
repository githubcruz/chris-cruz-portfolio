import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_75%_18%,rgba(255,107,26,0.16),transparent_40%)]" />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
