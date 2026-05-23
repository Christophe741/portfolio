"use client";

import { useEffect, useRef } from "react";

export default function Stars() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const W = 1400, H = 2200;
    let out = "";
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const r = (Math.random() * 1.1 + 0.2).toFixed(2);
      const o = (Math.random() * 0.6 + 0.2).toFixed(2);
      out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="#cfe4ff" opacity="${o}"/>`;
    }
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.4" fill="#5eead4" opacity=".8"/>`;
    }
    svg.innerHTML = out;
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1400 2200"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
      aria-hidden
    />
  );
}
