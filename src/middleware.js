import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_PATHS = new Set(["/portfolio-access", "/favicon.ico", "/icon.svg", "/manifest.webmanifest"]);
export async function middleware(request) {
 const { pathname } = request.nextUrl;
 // No publicly exposed portfolio passwords in source code.
 const passwordConfigured = Boolean(process.env.PORTFOLIO_PASSWORD && process.env.PORTFOLIO_SESSION_SECRET);
 const isStatic = pathname.startsWith("/_next/") || pathname.startsWith("/photo/") ||
  pathname.startsWith("/assets/") || pathname.startsWith("/videos/") ||
  /\.(?:ico|png|jpg|jpeg|webp|svg|woff2?|css|js|txt|xml|mp4)$/i.test(pathname);
 if (PUBLIC_PATHS.has(pathname) || isStatic || pathname.startsWith("/api/portfolio-access")) return NextResponse.next();

 if (passwordConfigured) {
  const token = request.cookies.get("portfolio_access")?.value;
  let allowed = false;
  if (token) {
   try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.PORTFOLIO_SESSION_SECRET), { issuer: "chris-cruz-portfolio" });
    allowed = payload.access === "granted";
   } catch {}
  }
  if (!allowed) {
   if (pathname.startsWith("/api/")) return NextResponse.json({error:"Unauthorized"},{status:401});
   const url = new URL("/portfolio-access", request.url);
   if (pathname !== "/") url.searchParams.set("next", pathname);
   return NextResponse.redirect(url);
  }
 }

 // Retain admin login gate for authenticated portfolio visitors.
 if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
  const token = request.cookies.get("admin_token")?.value;
  if (!token) return NextResponse.redirect(new URL("/admin/login", request.url));
  try {
   await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
  } catch {
   const response = NextResponse.redirect(new URL("/admin/login", request.url));
   response.cookies.delete("admin_token");
   return response;
  }
 }
 return NextResponse.next();
}
export const config = { matcher: ["/((?!_next/static|_next/image).*)"] };
