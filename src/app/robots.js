export default function robots() {
 return {
  rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api/admin", "/coming-soon", "/projects/visual-motion"] }],
  sitemap: "https://www.chriscruz.tech/sitemap.xml",
 };
}
