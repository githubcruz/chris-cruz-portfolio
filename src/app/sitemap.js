import { creativeProjects } from "@/data/creativeProjects";

const BASE = "https://www.chriscruz.tech";
const paths = [
 "/", "/projects", "/creative", "/about", "/contact", "/resume",
 "/projects/meta-blueprint", "/projects/meta-image-privacy", "/projects/bart-fare-gates",
 ...creativeProjects.map(project => `/creative/${project.slug}`),
];

export default function sitemap() {
 return paths.map(path => ({
  url: BASE + path,
  changeFrequency: "monthly",
  priority: path === "/" ? 1 : path === "/projects" || path === "/creative" ? 0.9 : 0.7,
 }));
}
