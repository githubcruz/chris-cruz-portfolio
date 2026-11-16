import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
 title: "Contact",
 description: "Get in touch with Chris Cruz about visual design, product design, and creative collaboration."
};

export default function ContactPage() {
 return (
  <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]">
   <Cursor light />
   <Navbar />
   <Contact standalone />
   <Footer />
  </main>
 );
}