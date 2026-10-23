"use client";
import { useState } from "react";
import Image from "next/image";
export default function PortfolioAccess() {
 const [password,setPassword]=useState("");
 const [show,setShow]=useState(false);
 const [loading,setLoading]=useState(false);
 const [error,setError]=useState("");
 async function submit(e) {
  e.preventDefault(); setLoading(true);setError("");
  try {
   const response=await fetch("/api/portfolio-access",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({password})});
   const data=await response.json();
   if (!response.ok){setError(data.error || "Could not unlock portfolio.");return;}
   const next=new URLSearchParams(window.location.search).get("next")||"/";
   window.location.assign(next.startsWith("/")&&!next.startsWith("//")?next:"/");
  } catch {setError("Unable to connect. Please try again.");}
  finally {setLoading(false);}
 }
 return <main className="min-h-screen bg-white text-[#151515] flex flex-col relative overflow-hidden">
  <header className="relative z-10 px-7 md:px-20 py-7 flex items-center gap-3">
   <Image src="/chris-avatar.jpg" width={44} height={44} alt="" className="rounded-full border-2 border-[#0072FC]" />
   <span className="font-black tracking-tight text-lg">CHRIS CRUZ<span className="text-[#0072FC]">.</span></span>
  </header>
  <div className="absolute top-[22%] right-[-12%] w-[min(70vw,760px)] aspect-square rounded-full blur-[110px] bg-[#0072FC]/10 pointer-events-none"/>
  <section className="relative z-10 flex-1 flex flex-col justify-center px-7 md:px-20 py-16">
   <div className="w-full max-w-[740px]">
    <p className="text-[#0072FC] uppercase tracking-[.3em] font-bold text-xs mb-8">Private portfolio · Chris Cruz</p>
    <h1 className="text-[clamp(3.8rem,10vw,8rem)] tracking-[-.075em] font-black leading-[.94]">Good work<br/>starts with <span className="text-[#0072FC]">access.</span></h1>
    <p className="mt-8 text-[#666] text-lg md:text-xl max-w-lg">This portfolio is currently private. Enter the password to explore selected work, design thinking, and case studies.</p>
    <form onSubmit={submit} className="mt-10 max-w-md flex flex-col gap-3">
     <label htmlFor="portfolio-pass" className="text-sm font-semibold">Portfolio password</label>
     <div className="flex overflow-hidden rounded-xl border border-[#D8DEE8] focus-within:border-[#0072FC] focus-within:ring-2 focus-within:ring-[#0072FC]/10">
      <input id="portfolio-pass" value={password} onChange={e=>setPassword(e.target.value)} type={show?"text":"password"} autoComplete="current-password" required className="w-full bg-white text-[#111] py-4 px-4 outline-none" placeholder="Enter password"/>
      <button type="button" onClick={()=>setShow(v=>!v)} className="text-[#666] px-4 text-sm">{show?"Hide":"Show"}</button>
     </div>
     {error && <p role="alert" className="text-[#b42318] text-sm">{error}</p>}
     <button disabled={loading} type="submit" className="mt-2 rounded-full bg-[#0072FC] hover:bg-[#005bd0] text-white font-semibold px-7 py-4 transition-colors disabled:opacity-50">{loading?"Unlocking…":"Enter portfolio ↗"}</button>
    </form>
   </div>
  </section>
  <footer className="px-7 md:px-20 py-7 text-[#777] text-xs">© {new Date().getFullYear()} Chris Cruz · Senior Visual & Product Designer</footer>
 </main>;
}
