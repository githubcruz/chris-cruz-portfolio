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
 icons:{icon:[{url:"/favicon.ico?v=cc-original-2",type:"image/x-icon",sizes:"any"},{url:"/icon.svg?v=cc-original-2",type:"image/svg+xml"}],shortcut:"/favicon.ico?v=cc-original-2",apple:"/icon.svg?v=cc-original-2"},
 robots:{index:true,follow:true}
};
export default function RootLayout({children}){return <html lang="en" className={`${inter.variable} ${playfair.variable}`}><body>{children}<Analytics/></body></html>;}
