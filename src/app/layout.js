import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
const inter=Inter({subsets:["latin"],variable:"--font-inter",display:"swap"});
const playfair=Playfair_Display({subsets:["latin"],style:["normal","italic"],variable:"--font-playfair",display:"swap"});
export const viewport={themeColor:"#111111"};
export const metadata={
 title:{default:"Chris Cruz — Visual Designer & Creative Technologist",template:"%s | Chris Cruz"},
 description:"Selected work in visual design, UI/UX, creative systems, digital learning, branding, and motion by Chris Cruz.",
 authors:[{name:"Chris Cruz"}],
 creator:"Chris Cruz",
 keywords:["Chris Cruz","Visual Designer","Creative Technologist","Meta Blueprint","Motion Design","Product Design","Design Systems"],
 robots:{index:false,follow:false}
};
export default function RootLayout({children}){return <html lang="en" className={`${inter.variable} ${playfair.variable}`}><body>{children}<Analytics/></body></html>;}
