"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor({ light = false }) {
  const cursorRef = useRef(null);
  const grainRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduced.matches);
    update();
    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled || !cursorRef.current) return;
    const element = cursorRef.current;
    const grain = grainRef.current;
    let mx = -100, my = -100, x = -100, y = -100;
    let scale = 1, targetScale = 1, raf;

    const move = (event) => {
      mx = event.clientX;
      my = event.clientY;
      const interactive = Boolean(event.target.closest("a, button, [role='button']"));
      targetScale = interactive ? 1.7 : 1;
      element.style.backgroundColor = interactive ? "transparent" : (light ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)");
      element.style.borderColor = interactive ? (light ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)") : "transparent";
      if (grain) grain.style.opacity = light && !interactive ? "0.08" : "0";
      element.style.opacity = "1";
    };
    const leave = () => { element.style.opacity = "0"; };
    const enter = () => { element.style.opacity = "1"; };
    const frame = () => {
      x += (mx - x) * 0.18;
      y += (my - y) * 0.18;
      scale += (targetScale - scale) * 0.15;
      element.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%) scale(${scale})`;
      raf = requestAnimationFrame(frame);
    };
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    document.addEventListener("pointerenter", enter);
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("pointerenter", enter);
    };
  }, [enabled, light]);

  if (!enabled) return null;
  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 38,
        height: 38,
        border: "1.5px solid transparent",
        borderRadius: "50%",
        background: light ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)",
        mixBlendMode: "normal",
        pointerEvents: "none",
        zIndex: 99999,
        opacity: 0,
        willChange: "transform",
        transition: "background-color 180ms ease, border-color 180ms ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {light && <svg ref={grainRef} viewBox="0 0 40 40" aria-hidden="true" style={{position:"absolute",inset:0,width:"100%",height:"100%",borderRadius:"50%",opacity:0.08,overflow:"hidden",pointerEvents:"none",transition:"opacity 180ms ease"}}><defs><filter id="cursor-grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" seed="7"/><feColorMatrix type="saturate" values="0"/></filter><clipPath id="cursor-grain-clip"><circle cx="20" cy="20" r="20"/></clipPath></defs><rect width="40" height="40" fill="white" filter="url(#cursor-grain)" clipPath="url(#cursor-grain-clip)"/></svg>}
    </div>
  );
}
