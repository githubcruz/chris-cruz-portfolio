import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
const inter=Inter({subsets:["latin"],variable:"--font-inter",display:"swap"});
const playfair=Playfair_Display({subsets:["latin"],style:["normal","italic"],variable:"--font-playfair",display:"swap"});
export const viewport={themeColor:"#FFFFFF"};
export const metadata={
 title:{default:"Chris Cruz — Senior Visual & Product Designer",template:"%s | Chris Cruz"},
 description:"Portfolio of Chris Cruz, a Bay Area senior visual and product designer specializing in interaction design, design systems, research, prototyping, and motion.",
 authors:[{name:"Chris Cruz"}],
 creator:"Chris Cruz",
 keywords:["Chris Cruz","Visual Designer","Creative Technologist","Meta Blueprint","Motion Design","Product Design","Design Systems"],
 robots:{index:true,follow:true}
};
export default function RootLayout({children}){return <html lang="en" className={`${inter.variable} ${playfair.variable}`}><body>{children}<Analytics/></body></html>;}
