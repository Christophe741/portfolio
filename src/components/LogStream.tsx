"use client";

import HudPanel, { HudHeader } from "./HudPanel";
import { useLang } from "@/context/LangContext";

const LOGS = [
  { ts: "12:42:03", lv: "OK", lvColor: "var(--green)", msgKey: "log-1" },
  { ts: "11:18:54", lv: "INF", lvColor: "var(--teal)", msgKey: "log-2" },
  { ts: "09:30:12", lv: "OK", lvColor: "var(--green)", msgKey: "log-3" },
  { ts: "08:55:01", lv: "INF", lvColor: "var(--teal)", msgKey: "log-4" },
  { ts: "06:12:48", lv: "WRN", lvColor: "var(--amber)", msgKey: "log-5" },
];

export default function LogStream() {
  const { t } = useLang();

  return (
    <HudPanel style={{ padding: "14px 18px" }}>
      <HudHeader id="05" title={t("log-title")} stat="● LIVE" />

      <div
        style={{
          maxHeight: "130px",
          overflowY: "auto",
          fontSize: "11.5px",
          color: "var(--ink-dim)",
        }}
      >
        {LOGS.map((log, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "14px",
              padding: "3px 0",
              borderBottom:
                i < LOGS.length - 1 ? "1px dashed var(--line-soft)" : "none",
            }}
          >
            <span
              style={{
                color: "var(--ink-mute)",
                fontSize: "10.5px",
                flex: "0 0 80px",
              }}
            >
              {log.ts}
            </span>
            <span
              style={{
                flex: "0 0 50px",
                fontSize: "10px",
                letterSpacing: ".1em",
                color: log.lvColor,
              }}
            >
              [{log.lv}]
            </span>
            <span
              style={{ color: "var(--ink-dim)" }}
              dangerouslySetInnerHTML={{ __html: t(log.msgKey) }}
            />
          </div>
        ))}
      </div>
    </HudPanel>
  );
}
