"use client";

import HudPanel from "./HudPanel";
import { useLang } from "@/context/LangContext";

interface KpiData {
  titleKey: string;
  icon: string;
  value: string;
  unit: string;
  descKey: string;
  barPct: number;
  showGreenDot?: boolean;
}

const KPIs: KpiData[] = [
  { titleKey: "kpi-1", icon: "↗", value: "02", unit: "/ active", descKey: "kpi-1-d", barPct: 55, showGreenDot: true },
  { titleKey: "kpi-2", icon: "●", value: "12", unit: "/ outils", descKey: "kpi-2-d", barPct: 78 },
  { titleKey: "kpi-3", icon: "⬢", value: "100", unit: "%", descKey: "kpi-3-d", barPct: 100, showGreenDot: true },
  { titleKey: "kpi-4", icon: "⏲", value: "<24", unit: "h", descKey: "kpi-4-d", barPct: 88 },
];

export default function KpiPanel({ data }: { data: KpiData }) {
  const { t } = useLang();

  return (
    <HudPanel style={{ padding: "16px 18px" }}>
      <div
        style={{
          fontSize: "10.5px",
          color: "var(--ink-mute)",
          letterSpacing: ".16em",
          textTransform: "uppercase",
          marginBottom: "8px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{t(data.titleKey)}</span>
        <span style={{ color: "var(--teal)" }}>{data.icon}</span>
      </div>

      <div
        style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: "32px",
          fontWeight: 700,
          color: "var(--ink)",
          letterSpacing: "-.01em",
          lineHeight: 1.05,
        }}
      >
        {data.value}
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "13px",
            color: "var(--ink-dim)",
            marginLeft: "4px",
            fontWeight: 400,
          }}
        >
          {data.unit}
        </span>
      </div>

      <div style={{ fontSize: "11px", color: "var(--ink-dim)", marginTop: "6px" }}>
        {data.showGreenDot && <span style={{ color: "var(--green)" }}>● </span>}
        {t(data.descKey)}
      </div>

      <div
        style={{
          marginTop: "10px",
          height: "4px",
          borderRadius: "2px",
          background: "rgba(255,255,255,.04)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: `${data.barPct}%`,
            background: "linear-gradient(90deg,var(--teal),var(--teal-2))",
            borderRadius: "2px",
          }}
        />
      </div>
    </HudPanel>
  );
}

export { KPIs };
