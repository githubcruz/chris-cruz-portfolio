const BASE = "https://www.chriscruz.tech";
const paths = [
 "/", "/projects", "/about", "/contact", "/resume",
 "/projects/meta-blueprint", "/projects/meta-image-privacy", "/projects/bart-fare-gates",
];

export default function sitemap() {
 return paths.map(path => ({
  url: BASE + path,
  changeFrequency: "monthly",
  priority: path === "/" ? 1 : path === "/projects" ? 0.9 : 0.7,
 }));
}
