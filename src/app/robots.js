export default function robots() {
 return {
  rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api/admin", "/coming-soon"] }],
  sitemap: "https://chris-cruz-portfolio.vercel.app/sitemap.xml"
 };
}
