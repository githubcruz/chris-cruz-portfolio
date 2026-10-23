const BASE = "https://chris-cruz-portfolio.vercel.app";
const paths = ["/", "/projects", "/about", "/contact", "/resume",
  "/projects/meta-image-privacy", "/projects/meta-blueprint",
  "/projects/bart-fare-gates", "/projects/visual-motion"];
export default function sitemap() {
 return paths.map((path) => ({
  url: BASE + path,
  changeFrequency: "monthly",
  priority: path === "/" ? 1 : path === "/projects" ? 0.9 : 0.7
 }));
}
