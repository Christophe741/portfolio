"use client";

import HudPanel, { HudHeader } from "./HudPanel";
import { useLang } from "@/context/LangContext";

export default function Comms() {
  const { t } = useLang();

  return (
    <HudPanel id="contact">
      <HudHeader id="03" title={t("comms-title")} stat="● OUVERT" />

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <CommRow
          href="mailto:c.winkel.pro@gmail.com"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          }
          label="primary · email"
          value="c.winkel.pro@gmail.com"
        />

        <CommRow
          href="https://github.com/Christophe741"
          target="_blank"
          icon={
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.06c-3.2.69-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.35.78 1.05.78 2.12v3.15c0 .31.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
          }
          label="repository · github"
          value="github.com/Christophe741"
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "11px 14px",
            border: "1px solid var(--line)",
            borderRadius: "4px",
            background: "rgba(10,18,38,.5)",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              border: "1px solid var(--teal-line)",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--teal)",
              flex: "0 0 32px",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14">
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
              <circle cx="12" cy="12" r="5" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: "10.5px", color: "var(--ink-mute)", letterSpacing: ".14em", textTransform: "uppercase" }}>
              {t("comm-loc-lbl")}
            </div>
            <div style={{ fontSize: "13px", color: "var(--ink)", marginTop: "2px" }}>
              {t("comm-loc-val")}
            </div>
          </div>
        </div>
      </div>

      {/* Compose prompt */}
      <div
        style={{
          marginTop: "10px",
          border: "1px solid var(--teal-line)",
          borderRadius: "4px",
          padding: "14px 16px",
          background: "rgba(94,234,212,.04)",
        }}
      >
        <div
          style={{
            fontSize: "10.5px",
            color: "var(--teal)",
            letterSpacing: ".14em",
            textTransform: "uppercase",
            marginBottom: "8px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              background: "var(--teal)",
              borderRadius: "50%",
              boxShadow: "0 0 6px var(--teal)",
              display: "inline-block",
            }}
          />
          {t("comp-lbl")}
        </div>
        <div style={{ fontSize: "12.5px", color: "var(--ink-dim)", lineHeight: 1.8 }}>
          <span style={{ color: "var(--teal)" }}>$</span> ping --to christophe
        </div>
        <div style={{ fontSize: "12.5px", color: "var(--ink-dim)", lineHeight: 1.8 }}>
          <span style={{ color: "var(--teal)" }}>›</span> {t("comp-prompt")}
        </div>
      </div>
    </HudPanel>
  );
}

function CommRow({
  href,
  target,
  icon,
  label,
  value,
}: {
  href: string;
  target?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  const style: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "11px 14px",
    border: "1px solid var(--line)",
    borderRadius: "4px",
    background: "rgba(10,18,38,.5)",
    transition: "all .2s",
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <a href={href} target={target} rel={target ? "noopener noreferrer" : undefined} style={style}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--teal-line)";
        (e.currentTarget as HTMLElement).style.background = "var(--teal-soft)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
        (e.currentTarget as HTMLElement).style.background = "rgba(10,18,38,.5)";
      }}
    >
      <div
        style={{
          width: "32px",
          height: "32px",
          border: "1px solid var(--teal-line)",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--teal)",
          flex: "0 0 32px",
        }}
      >
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "10.5px", color: "var(--ink-mute)", letterSpacing: ".14em", textTransform: "uppercase" }}>
          {label}
        </div>
        <div style={{ fontSize: "13px", color: "var(--ink)", marginTop: "2px", wordBreak: "break-all" }}>
          {value}
        </div>
      </div>
      <span style={{ color: "var(--ink-mute)", fontSize: "14px" }}>→</span>
    </a>
  );
}
