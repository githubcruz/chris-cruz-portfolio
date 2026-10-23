import { SiFigma, SiHtml5, SiCss } from "react-icons/si";
import { TbBrandAdobeAfterEffect, TbBrandAdobePremier, TbBrandAdobePhotoshop, TbBrandAdobeIllustrator } from "react-icons/tb";

export const SECTION = { label: "About Me" };
export const HEADING = { line1: "Designing", line2: "what", line3: "matters." };
export const BIO = [
  "I believe the best design makes complex things feel *effortless*.",
  "Over the past six years, I've worked at *Meta* across visual design, digital learning, interaction design, and design systems. My work spans early concepts and prototypes to production-ready experiences, with a focus on clarity, consistency, and the people using them.",
  "I enjoy working where *visual craft meets problem-solving*, bringing structure to ambiguous challenges and collaborating across disciplines to make ideas real.",
  "Outside digital products, my human-centered design experience includes *BART fare gate research* and usability testing."
];
export const RESUME_URL = "/resume";
export const TECH = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
];
export const CREATIVE = [
  { name: "Figma", icon: SiFigma },
  { name: "After Effects", icon: TbBrandAdobeAfterEffect },
  { name: "Premiere Pro", icon: TbBrandAdobePremier },
  { name: "Photoshop", icon: TbBrandAdobePhotoshop },
  { name: "Illustrator", icon: TbBrandAdobeIllustrator },
];
export const EXPERIENCE = [
  { role: "Creative Designer — Meta Blueprint (Contract)", period: "Current" },
  { role: "Content Developer — Meta Blueprint", period: "Previous" },
  { role: "Production Assistant — Meta Blueprint", period: "Previous" },
];
