"use client";

import HudPanel, { HudHeader } from "./HudPanel";
import { useLang } from "@/context/LangContext";

type ChipColor = "teal" | "indigo" | "rose" | "amber";

interface StackRow {
  catKey: string;
  items: { label: string; color?: ChipColor }[];
  level: number;
}

const STACK: StackRow[] = [
  {
    catKey: "cat-front",
    items: [
      { label: "React", color: "teal" },
      { label: "Next.js", color: "teal" },
      { label: "Tailwind", color: "teal" },
      { label: "shadcn/ui", color: "teal" },
    ],
    level: 5,
  },
  {
    catKey: "cat-back",
    items: [
      { label: "Node.js", color: "indigo" },
      { label: "Prisma", color: "indigo" },
    ],
    level: 4,
  },
  {
    catKey: "cat-data",
    items: [
      { label: "PostgreSQL", color: "rose" },
      { label: "MariaDB", color: "rose" },
      { label: "MongoDB", color: "rose" },
    ],
    level: 4,
  },
  {
    catKey: "cat-infra",
    items: [
      { label: "Docker", color: "amber" },
      { label: "Vercel", color: "amber" },
      { label: "DigitalOcean", color: "amber" },
      { label: "CapRover", color: "amber" },
      { label: "Git", color: "amber" },
    ],
    level: 4,
  },
  {
    catKey: "cat-lang",
    items: [
      { label: "TypeScript", color: "teal" },
      { label: "JavaScript", color: "teal" },
      { label: "PHP", color: "indigo" },
      { label: "SQL", color: "rose" },
    ],
    level: 4,
  },
];

const chipColors: Record<ChipColor, { color: string; border: string; bg: string }> = {
  teal: { color: "var(--teal)", border: "var(--teal-line)", bg: "var(--teal-soft)" },
  indigo: { color: "var(--indigo)", border: "rgba(165,180,252,.28)", bg: "rgba(165,180,252,.05)" },
  rose: { color: "var(--rose)", border: "rgba(253,164,175,.28)", bg: "rgba(253,164,175,.05)" },
  amber: { color: "var(--amber)", border: "rgba(252,211,77,.28)", bg: "rgba(252,211,77,.05)" },
};

const defaultChip = { color: "var(--ink)", border: "var(--line)", bg: "rgba(94,234,212,.04)" };

export default function Stack() {
  const { t } = useLang();

  return (
    <HudPanel>
      <HudHeader id="02" title={t("stack-title")} stat="● CALIBRÉ" />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {STACK.map((row) => (
          <div
            key={row.catKey}
            style={{
              display: "grid",
              gridTemplateColumns: "110px 1fr 50px",
              alignItems: "center",
              gap: "12px",
              fontSize: "12px",
            }}
          >
            <div
              style={{
                color: "var(--ink-mute)",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                fontSize: "10.5px",
              }}
            >
              {t(row.catKey)}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {row.items.map((item) => {
                const style = item.color ? chipColors[item.color] : defaultChip;
                return (
                  <span
                    key={item.label}
                    style={{
                      fontSize: "11px",
                      color: style.color,
                      padding: "2px 7px",
                      border: `1px solid ${style.border}`,
                      borderRadius: "3px",
                      background: style.bg,
                    }}
                  >
                    {item.label}
                  </span>
                );
              })}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "3px", justifyContent: "flex-end" }}>
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  style={{
                    width: "5px",
                    height: "11px",
                    background: i < row.level ? "var(--teal)" : "var(--line)",
                    borderRadius: "1px",
                    boxShadow: i < row.level ? "0 0 4px var(--teal)" : "none",
                    display: "inline-block",
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </HudPanel>
  );
}
