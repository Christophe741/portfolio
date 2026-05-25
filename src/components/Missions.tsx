"use client";

import HudPanel, { HudHeader } from "./HudPanel";
import { useLang } from "@/context/LangContext";

type ChipVariant = "teal" | "indigo" | "rose" | "amber" | "default";

const chipStyle: Record<ChipVariant, { color: string; border: string; bg: string }> = {
  teal: { color: "var(--teal)", border: "var(--teal-line)", bg: "var(--teal-soft)" },
  indigo: { color: "var(--indigo)", border: "rgba(165,180,252,.28)", bg: "rgba(165,180,252,.05)" },
  rose: { color: "var(--rose)", border: "rgba(253,164,175,.28)", bg: "rgba(253,164,175,.05)" },
  amber: { color: "var(--amber)", border: "rgba(252,211,77,.28)", bg: "rgba(252,211,77,.05)" },
  default: { color: "var(--ink-dim)", border: "var(--line)", bg: "transparent" },
};

interface Chip { label: string; variant: ChipVariant }

interface Mission {
  num: string;
  status: string;
  statusColor: string;
  title: string;
  roleKey: string;
  descKey: string;
  chips: Chip[];
  footKey: string;
  linkKey: string;
  link: string;
}

const MISSIONS: Mission[] = [
  {
    num: "MISSION · 01",
    status: "● PRODUCTION",
    statusColor: "var(--teal)",
    title: "M-Motors",
    roleKey: "m-role",
    descKey: "m-desc",
    chips: [
      { label: "Next.js", variant: "teal" },
      { label: "TypeScript", variant: "teal" },
      { label: "Prisma", variant: "indigo" },
      { label: "PostgreSQL", variant: "rose" },
      { label: "Vercel", variant: "amber" },
    ],
    footKey: "m-foot",
    linkKey: "m-link",
    link: "https://github.com/Christophe741/m-motors",
  },
  {
    num: "MISSION · 02",
    status: "● DELIVERED",
    statusColor: "var(--teal)",
    title: "Ecoride",
    roleKey: "e-role",
    descKey: "e-desc",
    chips: [
      { label: "PHP", variant: "indigo" },
      { label: "JavaScript", variant: "teal" },
      { label: "Docker", variant: "amber" },
      { label: "CapRover", variant: "amber" },
      { label: "DigitalOcean", variant: "amber" },
      { label: "MariaDB", variant: "rose" },
      { label: "MongoDB", variant: "rose" },
    ],
    footKey: "e-foot",
    linkKey: "e-link",
    link: "https://github.com/Christophe741/ecoride",
  },
];

export default function Missions() {
  const { t } = useLang();

  return (
    <HudPanel id="missions-sec">
      <HudHeader id="04" title={t("missions-title")} stat="● 02 EN ORBITE" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "14px",
        }}
      >
        {MISSIONS.map((m) => (
          <article
            key={m.num}
            style={{
              border: "1px solid var(--line)",
              borderRadius: "4px",
              padding: "18px 20px",
              background: "rgba(10,18,38,.55)",
              position: "relative",
              transition: "all .2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--teal-line)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "10.5px",
                color: "var(--ink-mute)",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              <span>{m.num}</span>
              <span style={{ color: m.statusColor }}>{m.status}</span>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "26px",
                fontWeight: 700,
                margin: "0 0 4px",
                color: "#fff",
                letterSpacing: "-.01em",
              }}
            >
              {m.title}
            </h3>

            <div
              style={{
                fontSize: "11.5px",
                color: "var(--ink-mute)",
                marginBottom: "14px",
                letterSpacing: ".04em",
              }}
            >
              {t(m.roleKey)}
            </div>

            <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--ink-dim)", margin: "0 0 14px" }}>
              {t(m.descKey)}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "14px" }}>
              {m.chips.map((chip) => (
                <span
                  key={chip.label}
                  style={{
                    fontSize: "10.5px",
                    padding: "2px 7px",
                    border: `1px solid ${chipStyle[chip.variant].border}`,
                    borderRadius: "3px",
                    color: chipStyle[chip.variant].color,
                    background: chipStyle[chip.variant].bg,
                  }}
                >
                  {chip.label}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px dashed var(--line)",
                paddingTop: "12px",
                fontSize: "11px",
                color: "var(--ink-mute)",
                letterSpacing: ".04em",
              }}
            >
              <span>{t(m.footKey)}</span>
              <a href={m.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)", cursor: "pointer", textDecoration: "none" }}>{t(m.linkKey)}</a>
            </div>
          </article>
        ))}
      </div>
    </HudPanel>
  );
}
