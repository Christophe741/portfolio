"use client";

import React from "react";
import HudPanel, { HudHeader } from "./HudPanel";
import { useLang } from "@/context/LangContext";

export default function Telemetry() {
  const { t } = useLang();

  const kvPairs = [
    { k: "kv-loc", v: "France · remote", type: "plain" },
    { k: "kv-stat", v: `● ${t("kv-stat-v")}`, type: "green" },
    { k: "kv-focus", v: "web · product", type: "teal" },
    { k: "kv-form", v: "Dev. Web & Mobile", type: "plain" },
    { k: "kv-resp", v: "< 24h", type: "plain" },
    { k: "kv-mode", v: "freelance · CDI", type: "plain" },
  ];

  return (
    <HudPanel>
      <HudHeader id="01" title={t("tel-title")} stat="● NOMINAL" />
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <div
          style={{ fontSize: "13.5px", lineHeight: 1.75, color: "var(--ink-dim)" }}
          dangerouslySetInnerHTML={{
            __html: `<span style="color:var(--teal)">//</span> ${t("tel-lede")}`,
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "8px 14px",
            fontSize: "11.5px",
          }}
        >
          {kvPairs.map(({ k, v, type }) => (
            <React.Fragment key={k}>
              <div style={{ color: "var(--ink-mute)", letterSpacing: ".06em" }}>
                {t(k)}
              </div>
              <div
                style={{
                  color:
                    type === "teal"
                      ? "var(--teal)"
                      : type === "green"
                      ? "var(--green)"
                      : "var(--ink)",
                  textAlign: "right",
                }}
              >
                {v}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </HudPanel>
  );
}
