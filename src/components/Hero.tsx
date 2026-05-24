"use client";

import HudPanel from "./HudPanel";
import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { t } = useLang();

  function scrollToMissions() {
    document.getElementById("missions-sec")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <HudPanel style={{ padding: "0", position: "relative", minHeight: "380px" }}>
      <div
        style={{
          padding: "32px 32px 30px",
          overflow: "hidden",
          minHeight: "380px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "4px",
        }}
      >
        <div>
          <div
            style={{
              color: "var(--ink-mute)",
              fontSize: "11px",
              letterSpacing: ".16em",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            <span style={{ color: "var(--teal)" }}>⬡</span> NODE · CWK-01 /{" "}
            <span style={{ color: "var(--teal)" }}>CORE_DIRECTIVE</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              fontSize: "clamp(42px, 6vw, 84px)",
              lineHeight: 0.98,
              letterSpacing: "-.03em",
              fontWeight: 700,
              margin: 0,
              color: "var(--ink)",
            }}
          >
            <span style={{ display: "block" }}>{t("h1-1")}</span>
            <span style={{ display: "block", color: "var(--teal)" }}>{t("h1-2")}</span>
            <span style={{ display: "block" }}>{t("h1-3")}</span>
          </h1>

          <p
            style={{
              fontSize: "14px",
              color: "var(--ink-dim)",
              lineHeight: 1.7,
              maxWidth: "520px",
              marginTop: "24px",
            }}
          >
            <span style={{ color: "var(--ink-mute)" }}>{"// "}</span>
            {t("hero-sub1")}
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "26px", flexWrap: "wrap" }}>
          <button className="btn" onClick={scrollToMissions}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            {t("cta-1")}
          </button>
          <a className="btn ghost" href="mailto:c.winkel.pro@gmail.com">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7l9 6 9-6M3 7v10h18V7" />
            </svg>
            {t("cta-2")}
          </a>
        </div>

        {/* Orbital diagram */}
        <svg
          viewBox="0 0 520 520"
          fill="none"
          style={{
            position: "absolute",
            right: "-100px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "520px",
            height: "520px",
            pointerEvents: "none",
            opacity: 0.9,
          }}
          aria-hidden
        >
          <defs>
            <radialGradient id="sg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5eead4" stopOpacity=".25" />
              <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="260" cy="260" r="240" stroke="rgba(94,234,212,.08)" />
          <circle cx="260" cy="260" r="190" stroke="rgba(94,234,212,.12)" strokeDasharray="3 5" />
          <circle cx="260" cy="260" r="140" stroke="rgba(94,234,212,.16)" />
          <circle cx="260" cy="260" r="95" stroke="rgba(94,234,212,.22)" />
          <ellipse cx="260" cy="260" rx="230" ry="60" stroke="rgba(94,234,212,.2)" transform="rotate(-20 260 260)" />
          <ellipse cx="260" cy="260" rx="230" ry="60" stroke="rgba(94,234,212,.13)" transform="rotate(35 260 260)" />
          <circle cx="260" cy="260" r="50" fill="url(#sg)" />
          <circle cx="260" cy="260" r="14" fill="#0a1228" stroke="#5eead4" strokeWidth="1.2" />
          <circle cx="260" cy="260" r="5" fill="#5eead4" />
          <circle cx="450" cy="165" r="6" fill="#5eead4" />
          <circle cx="450" cy="165" r="14" fill="none" stroke="#5eead4" strokeOpacity=".3" />
          <text x="468" y="170" fill="#5eead4" fontSize="11" fontFamily="JetBrains Mono">Next.js</text>
          <circle cx="115" cy="345" r="5" fill="#a5b4fc" />
          <text x="124" y="362" fill="#a5b4fc" fontSize="11" fontFamily="JetBrains Mono" opacity=".75">Node</text>
          <circle cx="370" cy="430" r="4" fill="#fcd34d" />
          <text x="352" y="450" fill="#fcd34d" fontSize="11" fontFamily="JetBrains Mono" opacity=".7">PostgreSQL</text>
          <circle cx="95" cy="115" r="3.5" fill="#fda4af" />
          <text x="105" y="115" fill="#fda4af" fontSize="11" fontFamily="JetBrains Mono" opacity=".7">React</text>
          <circle cx="265" cy="40" r="3" fill="#5eead4" opacity=".6" />
          <circle cx="500" cy="380" r="2" fill="#5eead4" opacity=".5" />
        </svg>
      </div>
    </HudPanel>
  );
}
