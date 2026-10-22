"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
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
    let mx = -100, my = -100, x = -100, y = -100;
    let scale = 1, targetScale = 1, raf;

    const move = (event) => {
      mx = event.clientX;
      my = event.clientY;
      targetScale = event.target.closest("a, button, [role='button']") ? 1.7 : 1;
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
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 34,
        height: 34,
        border: "1px solid rgba(255,255,255,0.50)",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.16)",
        mixBlendMode: "normal",
        pointerEvents: "none",
        zIndex: 99999,
        opacity: 0,
        willChange: "transform",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    </div>
  );
}
