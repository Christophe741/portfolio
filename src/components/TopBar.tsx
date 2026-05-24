"use client";

import { useEffect, useState } from "react";
import { useLang, Lang } from "@/context/LangContext";

export default function TopBar() {
  const { lang, setLang, t } = useLang();
  const [clock, setClock] = useState("--:--:-- UTC");

  useEffect(() => {
    function tick() {
      const d = new Date();
      const p = (n: number) => String(n).padStart(2, "0");
      setClock(
        `${p(d.getUTCHours())}:${p(d.getUTCMinutes())}:${p(d.getUTCSeconds())} UTC`
      );
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "8px 14px",
        border: "1px solid var(--teal-line)",
        borderRadius: "6px",
        background: "rgba(10,18,38,.7)",
        fontSize: "11.5px",
        letterSpacing: ".06em",
        marginBottom: "18px",
        flexWrap: "wrap",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--teal)", fontWeight: 600 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="3.5" />
          <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(60 12 12)" />
        </svg>
        MISSION CTRL
      </div>

      <Seg label="NODE" value="CWK-01" />
      <Seg label={t("op")} value="Christophe Winkel" />
      <Seg label={t("frame")} value="~/portfolio" />

      <div style={{ flex: 1 }} />

      {/* Pulse */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "var(--green)",
            boxShadow: "0 0 8px var(--green)",
            animation: "pls 1.6s ease-in-out infinite",
            display: "inline-block",
          }}
        />
        <span style={{ color: "var(--teal)" }}>{t("online")}</span>
      </div>

      {/* Clock */}
      <span style={{ color: "var(--teal)" }}>{clock}</span>

      {/* Lang toggle */}
      <div
        style={{
          display: "flex",
          border: "1px solid var(--line)",
          borderRadius: "4px",
          padding: "1px",
        }}
      >
        {(["fr", "en"] as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            style={{
              padding: "2px 8px",
              fontSize: "11px",
              color: lang === l ? "var(--teal)" : "var(--ink-dim)",
              borderRadius: "3px",
              background: lang === l ? "var(--teal-soft)" : "transparent",
            }}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
}

function Seg({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ color: "var(--ink-mute)" }}>
      <b style={{ color: "var(--ink-dim)", fontWeight: 400 }}>{label}</b>
      {" · "}
      <span style={{ color: "var(--teal)" }}>{value}</span>
    </div>
  );
}
