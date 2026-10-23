import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { timingSafeEqual } from "node:crypto";
export const runtime = "nodejs";

export async function POST(request) {
 const expected = process.env.PORTFOLIO_PASSWORD;
 const secret = process.env.PORTFOLIO_SESSION_SECRET;
 if (!expected || !secret) return NextResponse.json({ error: "Password protection is not configured yet." }, { status: 503 });
 let body;
 try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." },{status:400}); }
 const supplied = typeof body.password === "string" ? body.password : "";
 const x = Buffer.from(supplied); const y = Buffer.from(expected);
 if (x.length !== y.length || !timingSafeEqual(x,y)) return NextResponse.json({error:"Incorrect password."},{status:401});
 const token = await new SignJWT({access:"granted"})
  .setProtectedHeader({alg:"HS256"}).setIssuer("chris-cruz-portfolio")
  .setIssuedAt().setExpirationTime("7d")
  .sign(new TextEncoder().encode(secret));
 const response = NextResponse.json({ok:true});
 response.cookies.set("portfolio_access",token,{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:604800});
 return response;
}
