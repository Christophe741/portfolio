"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLang, Lang } from "@/context/LangContext";

type Tab = "home" | "stack" | "missions" | "comms";

export default function MobileLayout() {
  const { lang, setLang, t } = useLang();
  const [tab, setTab] = useState<Tab>("home");
  const [clock, setClock] = useState("--:--:--");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function tick() {
      const d = new Date();
      const p = (n: number) => String(n).padStart(2, "0");
      setClock(`${p(d.getUTCHours())}:${p(d.getUTCMinutes())}:${p(d.getUTCSeconds())} UTC`);
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  function goTab(t: Tab) {
    setTab(t);
    scrollRef.current?.scrollTo({ top: 0, behavior: "instant" });
  }

  return (
    <div style={{ position: "relative", height: "100dvh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* ── Top bar ── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 30,
        padding: "env(safe-area-inset-top, 12px) 16px 10px",
        paddingTop: "max(env(safe-area-inset-top, 0px), 12px)",
        background: "linear-gradient(180deg, rgba(5,9,19,.92) 0%, rgba(5,9,19,.7) 70%, transparent 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "11px", letterSpacing: ".08em" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "7px", color: "var(--teal)", fontWeight: 700, fontSize: "12px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3" fill="currentColor" />
              <ellipse cx="12" cy="12" rx="10" ry="3.5" />
              <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(60 12 12)" />
            </svg>
            CWK-01
          </div>
          <span style={{
            fontSize: "9.5px", padding: "2px 6px",
            border: "1px solid var(--teal-line)", borderRadius: "3px",
            color: "var(--teal)", background: "var(--teal-soft)", letterSpacing: ".16em"
          }}>
            MISSION CTRL
          </span>
          <div style={{ flex: 1 }} />
          <span style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: "var(--green)", boxShadow: "0 0 6px var(--green)",
            display: "inline-block", animation: "pls 1.6s ease-in-out infinite",
            flexShrink: 0,
          }} />
          <span style={{ color: "var(--ink-mute)", fontSize: "10px", letterSpacing: ".06em" }}>{clock}</span>
          <div style={{ display: "flex", border: "1px solid var(--line)", borderRadius: "4px", padding: "1px", marginLeft: "6px" }}>
            {(["fr", "en"] as Lang[]).map((l) => (
              <button key={l} onClick={() => setLang(l)} style={{
                padding: "2px 7px", fontSize: "10px", borderRadius: "3px", letterSpacing: ".04em",
                color: lang === l ? "var(--teal)" : "var(--ink-mute)",
                background: lang === l ? "var(--teal-soft)" : "transparent",
              }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ── Scrollable content area ── */}
      <div ref={scrollRef} style={{
        flex: 1, overflowY: "auto", overflowX: "hidden",
        paddingTop: "calc(env(safe-area-inset-top, 0px) + 54px)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 90px)",
      }}>
        {tab === "home" && <HomeScreen goTab={goTab} />}
        {tab === "stack" && <StackScreen />}
        {tab === "missions" && <MissionsScreen />}
        {tab === "comms" && <CommsScreen />}
      </div>

      {/* ── Bottom tab bar ── */}
      <nav style={{
        position: "fixed",
        left: "10px", right: "10px",
        bottom: "max(env(safe-area-inset-bottom, 0px), 18px)",
        zIndex: 40,
        display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2px",
        padding: "6px",
        border: "1px solid var(--teal-line)", borderRadius: "14px",
        background: "rgba(10,18,38,.85)",
        backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
        boxShadow: "0 10px 30px rgba(0,0,0,.5), 0 0 0 1px rgba(94,234,212,.05)",
      }}>
        <TabBtn icon="home" label={t("tab-home")} active={tab === "home"} onClick={() => goTab("home")} />
        <TabBtn icon="stack" label={t("tab-stack")} active={tab === "stack"} onClick={() => goTab("stack")} />
        <TabBtn icon="missions" label={t("tab-missions")} active={tab === "missions"} onClick={() => goTab("missions")} />
        <TabBtn icon="comms" label={t("tab-comms")} active={tab === "comms"} onClick={() => goTab("comms")} />
      </nav>
    </div>
  );
}

/* ═══════════════════════════════ TAB BUTTON ═══════════════════════════════ */
function TabBtn({ icon, label, active, onClick }: { icon: string; label: string; active: boolean; onClick: () => void }) {
  const icons: Record<string, React.ReactElement> = {
    home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18"><circle cx="12" cy="12" r="3" fill="currentColor" /><ellipse cx="12" cy="12" rx="9" ry="3.2" /><ellipse cx="12" cy="12" rx="9" ry="3.2" transform="rotate(60 12 12)" /></svg>,
    stack: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18"><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5M3 18l9 5 9-5" /></svg>,
    missions: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" fill="currentColor" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></svg>,
    comms: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18"><path d="M4 6h16v10H7l-3 3z" /></svg>,
  };
  return (
    <button onClick={onClick} style={{
      display: "flex", flexDirection: "column", alignItems: "center", gap: "3px",
      padding: "8px 4px", borderRadius: "9px",
      color: active ? "var(--teal)" : "var(--ink-mute)",
      background: active ? "var(--teal-soft)" : "transparent",
      transition: "all .2s", position: "relative",
    }}>
      {active && <span style={{
        position: "absolute", top: "3px", width: "4px", height: "4px",
        borderRadius: "50%", background: "var(--teal)", boxShadow: "0 0 6px var(--teal)"
      }} />}
      {icons[icon]}
      <span style={{ fontSize: "9px", letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 500 }}>{label}</span>
    </button>
  );
}

/* ═══════════════════════════════ HUD CARD ═════════════════════════════════ */
function Hud({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="hud" style={{ marginBottom: "12px", ...style }}>
      <span className="br1" /><span className="br2" />
      {children}
    </div>
  );
}

function HudH({ id, title, stat }: { id: string; title: string; stat: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "10px", color: "var(--ink-mute)", fontSize: "9.5px", letterSpacing: ".16em", textTransform: "uppercase" }}>
      <span style={{ color: "var(--teal)" }}>{id}</span>
      <span style={{ color: "var(--ink)", fontSize: "9.5px", letterSpacing: ".16em" }}>{title}</span>
      <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg,var(--line),transparent)", alignSelf: "center" }} />
      <span style={{ color: "var(--green)", fontSize: "9px" }}>{stat}</span>
    </div>
  );
}

function Screen({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: "0 16px", animation: "mob-fade .28s ease-out" }}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════ HOME ═════════════════════════════════════ */
function HomeScreen({ goTab }: { goTab: (t: Tab) => void }) {
  const { t } = useLang();
  return (
    <Screen>
      {/* Hero card */}
      <Hud style={{ padding: 0, position: "relative", minHeight: "260px", marginTop: "8px" }}>
        <div style={{ padding: "18px 16px", overflow: "hidden", minHeight: "260px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRadius: "6px" }}>
        <div>
          <div style={{ color: "var(--ink-mute)", fontSize: "9.5px", letterSpacing: ".16em", textTransform: "uppercase", marginBottom: "14px" }}>
            <span style={{ color: "var(--teal)" }}>⬡</span> NODE · CWK-01 / <span style={{ color: "var(--teal)" }}>CORE_DIRECTIVE</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "42px", lineHeight: .98, letterSpacing: "-.03em", fontWeight: 700, margin: 0, color: "var(--ink)" }}>
            <span style={{ display: "block" }}>{t("h1-1")}</span>
            <span style={{ display: "block", color: "var(--teal)" }}>{t("h1-2")}</span>
            <span style={{ display: "block" }}>{t("h1-3")}</span>
          </h1>
          <p style={{ fontSize: "12px", color: "var(--ink-dim)", lineHeight: 1.7, marginTop: "14px" }}>
            <span style={{ color: "var(--ink-mute)" }}>{"// "}</span>{t("hero-sub")}
          </p>
        </div>
        <div style={{ display: "flex", gap: "8px", marginTop: "18px" }}>
          <button className="mob-btn" onClick={() => goTab("missions")}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            {t("cta-1")}
          </button>
          <button className="mob-btn mob-ghost" onClick={() => goTab("comms")}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7l9 6 9-6M3 7v10h18V7" /></svg>
            {t("cta-2")}
          </button>
        </div>
        {/* Orbital */}
        <svg viewBox="0 0 280 280" fill="none" aria-hidden style={{ position: "absolute", right: "-80px", top: "50%", transform: "translateY(-50%)", width: "280px", height: "280px", pointerEvents: "none", opacity: .6 }}>
          <defs><radialGradient id="sgm" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#5eead4" stopOpacity=".25" /><stop offset="100%" stopColor="#5eead4" stopOpacity="0" /></radialGradient></defs>
          <circle cx="140" cy="140" r="125" stroke="rgba(94,234,212,.08)" />
          <circle cx="140" cy="140" r="95" stroke="rgba(94,234,212,.14)" strokeDasharray="3 5" />
          <circle cx="140" cy="140" r="65" stroke="rgba(94,234,212,.18)" />
          <ellipse cx="140" cy="140" rx="120" ry="32" stroke="rgba(94,234,212,.2)" transform="rotate(-20 140 140)" />
          <circle cx="140" cy="140" r="32" fill="url(#sgm)" />
          <circle cx="140" cy="140" r="9" fill="#0a1228" stroke="#5eead4" strokeWidth="1" />
          <circle cx="140" cy="140" r="3" fill="#5eead4" />
          <circle cx="240" cy="98" r="4" fill="#5eead4" />
          <circle cx="58" cy="180" r="3" fill="#a5b4fc" />
          <circle cx="195" cy="230" r="2.5" fill="#fcd34d" />
          <circle cx="50" cy="58" r="2.5" fill="#fda4af" />
        </svg>
        </div>
      </Hud>

      {/* KPI 2×2 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "12px" }}>
        <KpiCard titleKey="kpi-1" icon="↗" value="02" unit="/ active" descKey="kpi-1-ds" barPct={55} greenDot />
        <KpiCard titleKey="kpi-2" icon="●" value="12" unit="/ outils" descKey="kpi-2-ds" barPct={78} />
        <KpiCard titleKey="kpi-3" icon="⬢" value="100" unit="%" descKey="kpi-3-ds" barPct={100} greenDot />
        <KpiCard titleKey="kpi-4" icon="⏲" value="<24" unit="h" descKey="kpi-4-ds" barPct={88} />
      </div>

      {/* Telemetry */}
      <Hud>
        <HudH id="01" title={t("tel-title")} stat="● NOMINAL" />
        <div style={{ fontSize: "12px", lineHeight: 1.7, color: "var(--ink-dim)", marginBottom: "10px" }}
          dangerouslySetInnerHTML={{ __html: `<span style="color:var(--teal)">//</span> ${t("tel-lede-s")}` }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px 12px", fontSize: "10.5px" }}>
          {[
            { k: "kv-loc", v: "France · remote", type: "plain" },
            { k: "kv-stat", v: `● ${t("kv-stat-v")}`, type: "green" },
            { k: "kv-focus", v: "web · product", type: "teal" },
            { k: "kv-resp", v: "< 24h", type: "plain" },
          ].map(({ k, v, type }) => (
            <React.Fragment key={k}>
              <div style={{ color: "var(--ink-mute)", letterSpacing: ".04em" }}>{t(k)}</div>
              <div style={{ color: type === "teal" ? "var(--teal)" : type === "green" ? "var(--green)" : "var(--ink)", textAlign: "right" }}>{v}</div>
            </React.Fragment>
          ))}
        </div>
      </Hud>

      {/* Log mini */}
      <Hud style={{ padding: "11px 12px" }}>
        <HudH id="05" title={t("log-title-s")} stat="● LIVE" />
        <div style={{ maxHeight: "120px", overflowY: "auto" }}>
        {[
          { ts: "12:42", lv: "OK", color: "var(--green)", key: "log-1-s" },
          { ts: "11:18", lv: "INF", color: "var(--teal)", key: "log-2-s" },
          { ts: "09:30", lv: "OK", color: "var(--green)", key: "log-3-s" },
          { ts: "08:55", lv: "INF", color: "var(--teal)", key: "log-4-s" },
          { ts: "06:12", lv: "WRN", color: "var(--amber)", key: "log-5-s" },
        ].map((log, i, arr) => (
          <div key={log.key} style={{ display: "flex", gap: "8px", padding: "4px 0", borderBottom: i < arr.length - 1 ? "1px dashed var(--line-soft)" : "none", alignItems: "baseline" }}>
            <span style={{ color: "var(--ink-mute)", fontSize: "9px", flex: "0 0 50px" }}>{log.ts}</span>
            <span style={{ flex: "0 0 38px", fontSize: "8.5px", letterSpacing: ".1em", color: log.color }}>[{log.lv}]</span>
            <span style={{ fontSize: "10px", lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: t(log.key) }} />
          </div>
        ))}
        </div>
      </Hud>

      <div style={{ textAlign: "center", fontSize: "9px", color: "var(--ink-mute)", letterSpacing: ".12em", margin: "18px 0 0", lineHeight: 1.8 }}>
        {"// "}you are stardust · <span style={{ color: "var(--teal)" }}>running on purpose</span><br />
        © 2026 · CHRISTOPHE WINKEL · v1.0.0
      </div>
    </Screen>
  );
}

/* ── KPI card ── */
function KpiCard({ titleKey, icon, value, unit, descKey, barPct, greenDot }: {
  titleKey: string; icon: string; value: string; unit: string;
  descKey: string; barPct: number; greenDot?: boolean;
}) {
  const { t } = useLang();
  return (
    <div className="hud" style={{ padding: "11px 12px" }}>
      <span className="br1" /><span className="br2" />
      <div style={{ fontSize: "9px", color: "var(--ink-mute)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>{t(titleKey)}</span><span style={{ color: "var(--teal)", fontSize: "10px" }}>{icon}</span>
      </div>
      <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "24px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-.01em", lineHeight: 1 }}>
        {value}<span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "11px", color: "var(--ink-dim)", marginLeft: "3px", fontWeight: 400 }}>{unit}</span>
      </div>
      <div style={{ fontSize: "9.5px", color: "var(--ink-dim)", marginTop: "4px", letterSpacing: ".04em" }}>
        {greenDot && <span style={{ color: "var(--green)" }}>● </span>}{t(descKey)}
      </div>
      <div style={{ marginTop: "7px", height: "3px", borderRadius: "2px", background: "rgba(255,255,255,.04)", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${barPct}%`, background: "linear-gradient(90deg,var(--teal),var(--teal-2))", borderRadius: "2px" }} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════ STACK ════════════════════════════════════ */
const STACK_ROWS = [
  { catKey: "cat-front", items: [["React", "teal"], ["Next.js", "teal"], ["Tailwind", "teal"], ["shadcn/ui", "teal"]], level: 5 },
  { catKey: "cat-back", items: [["Node.js", "alt"], ["Prisma", "alt"]], level: 4 },
  { catKey: "cat-data", items: [["PostgreSQL", "alt2"], ["MariaDB", "alt2"], ["MongoDB", "alt2"]], level: 4 },
  { catKey: "cat-infra", items: [["Docker", "alt3"], ["Vercel", "alt3"], ["DigitalOcean", "alt3"], ["CapRover", "alt3"], ["Git", "alt3"]], level: 4 },
  { catKey: "cat-lang", items: [["TypeScript", "teal"], ["JavaScript", "teal"], ["PHP", "alt"], ["SQL", "alt2"]], level: 4 },
] as const;

const chipVariantStyle: Record<string, { color: string; border: string; bg: string }> = {
  "": { color: "var(--ink)", border: "var(--line)", bg: "rgba(94,234,212,.04)" },
  teal: { color: "var(--teal)", border: "var(--teal-line)", bg: "var(--teal-soft)" },
  alt: { color: "var(--indigo)", border: "rgba(165,180,252,.28)", bg: "rgba(165,180,252,.05)" },
  alt2: { color: "var(--rose)", border: "rgba(253,164,175,.28)", bg: "rgba(253,164,175,.05)" },
  alt3: { color: "var(--amber)", border: "rgba(252,211,77,.28)", bg: "rgba(252,211,77,.05)" },
};

function StackScreen() {
  const { t } = useLang();
  return (
    <Screen>
      <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "-.02em", margin: "0 0 4px", color: "var(--ink)" }}>
        <span style={{ color: "var(--teal)" }}>02 // </span>{t("stack-title-h")}
      </h2>
      <div style={{ color: "var(--ink-mute)", fontSize: "10.5px", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: "18px" }}>
        <span style={{ color: "var(--teal)" }}>●</span> {t("stack-sub")}
      </div>

      <Hud>
        <HudH id="CFG" title={t("stack-cfg")} stat="● CALIBRÉ" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {STACK_ROWS.map((row, ri) => (
            <div key={row.catKey} style={{ display: "flex", flexDirection: "column", gap: "7px", padding: "11px 0", borderBottom: ri < STACK_ROWS.length - 1 ? "1px dashed var(--line-soft)" : "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ color: "var(--ink-mute)", letterSpacing: ".14em", textTransform: "uppercase", fontSize: "10px" }}>{t(row.catKey)}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "2.5px" }}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} style={{ width: "4px", height: "9px", background: i < row.level ? "var(--teal)" : "var(--line)", borderRadius: "1px", boxShadow: i < row.level ? "0 0 3px var(--teal)" : "none", display: "inline-block" }} />
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {row.items.map(([label, variant = ""]) => {
                  const s = chipVariantStyle[variant];
                  return (
                    <span key={label} style={{ fontSize: "10.5px", color: s.color, padding: "3px 7px", border: `1px solid ${s.border}`, borderRadius: "3px", background: s.bg }}>{label}</span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Hud>

      <div className="hud" style={{ padding: "11px 12px" }}>
        <span className="br1" /><span className="br2" />
        <div style={{ fontSize: "9px", color: "var(--ink-mute)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: "5px", display: "flex", justifyContent: "space-between" }}>
          <span>{t("stack-kpi")}</span><span style={{ color: "var(--teal)" }}>⏲</span>
        </div>
        <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "24px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-.01em", lineHeight: 1 }}>
          2<span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "11px", color: "var(--ink-dim)", marginLeft: "3px", fontWeight: 400 }}>+ {t("stack-years")} · auto-formation + Studi</span>
        </div>
        <div style={{ fontSize: "9.5px", color: "var(--ink-dim)", marginTop: "4px" }}>{t("stack-kpi-d")}</div>
      </div>
    </Screen>
  );
}

/* ═══════════════════════════════ MISSIONS ══════════════════════════════════ */
function MissionsScreen() {
  const { t } = useLang();
  return (
    <Screen>
      <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "-.02em", margin: "0 0 4px", color: "var(--ink)" }}>
        <span style={{ color: "var(--teal)" }}>03 // </span>{t("missions-title-h")}
      </h2>
      <div style={{ color: "var(--ink-mute)", fontSize: "10.5px", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: "18px" }}>
        <span style={{ color: "var(--teal)" }}>●</span> 02 {t("missions-sub")}
      </div>

      <MissionCard
        num="MISSION · 01" status="● PRODUCTION" title="M-Motors"
        roleKey="m-role" descKey="m-desc"
        chips={[["Next.js","t"],["TypeScript","t"],["Prisma","a"],["PostgreSQL","b"],["Vercel","c"]]}
        footKey="m-foot-s" linkKey="m-link-s" link="https://github.com/Christophe741/m-motors"
      />
      <MissionCard
        num="MISSION · 02" status="● DELIVERED" title="Ecoride"
        roleKey="e-role-s" descKey="e-desc-s"
        chips={[["PHP","a"],["JS","t"],["Docker","c"],["CapRover","c"],["DigitalOcean","c"],["MariaDB","b"],["MongoDB","b"]]}
        footKey="e-foot-s" linkKey="e-link-s" link="https://github.com/Christophe741/ecoride"
      />

      {/* Next mission placeholder */}
      <div className="hud" style={{ padding: "16px 14px", opacity: .55, borderStyle: "dashed", marginBottom: "12px" }}>
        <span className="br1" /><span className="br2" />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9.5px", color: "var(--ink-mute)", letterSpacing: ".16em", textTransform: "uppercase", marginBottom: "8px" }}>
          <span>{t("next-h")}</span><span style={{ color: "var(--amber)" }}>● IN_PROGRESS</span>
        </div>
        <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "24px", fontWeight: 700, margin: "0 0 4px", color: "var(--ink-dim)", letterSpacing: "-.01em" }}>
          {"// "}{t("next-t")}
        </h3>
        <div style={{ fontSize: "10.5px", color: "var(--ink-mute)", letterSpacing: ".04em" }}>{t("next-r")}</div>
      </div>
    </Screen>
  );
}

const chipColors: Record<string, { color: string; border: string }> = {
  t: { color: "var(--teal)", border: "var(--teal-line)" },
  a: { color: "var(--indigo)", border: "rgba(165,180,252,.28)" },
  b: { color: "var(--rose)", border: "rgba(253,164,175,.28)" },
  c: { color: "var(--amber)", border: "rgba(252,211,77,.28)" },
  "": { color: "var(--ink-dim)", border: "var(--line)" },
};

function MissionCard({ num, status, title, roleKey, descKey, chips, footKey, linkKey, link }: {
  num: string; status: string; title: string;
  roleKey: string; descKey: string;
  chips: [string, string][];
  footKey: string; linkKey: string; link: string;
}) {
  const { t } = useLang();
  return (
    <div className="hud" style={{ padding: "16px 14px", marginBottom: "12px" }}>
      <span className="br1" /><span className="br2" />
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9.5px", color: "var(--ink-mute)", letterSpacing: ".16em", textTransform: "uppercase", marginBottom: "8px" }}>
        <span>{num}</span><span style={{ color: "var(--teal)" }}>{status}</span>
      </div>
      <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "24px", fontWeight: 700, margin: "0 0 4px", color: "#fff", letterSpacing: "-.01em" }}>{title}</h3>
      <div style={{ fontSize: "10.5px", color: "var(--ink-mute)", marginBottom: "12px", letterSpacing: ".04em", lineHeight: 1.5 }}>{t(roleKey)}</div>
      <p style={{ fontSize: "12px", lineHeight: 1.65, color: "var(--ink-dim)", margin: "0 0 12px" }}>{t(descKey)}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "12px" }}>
        {chips.map(([label, variant]) => {
          const s = chipColors[variant] ?? chipColors[""];
          return <span key={label} style={{ fontSize: "9.5px", padding: "2px 6px", border: `1px solid ${s.border}`, borderRadius: "3px", color: s.color }}>{label}</span>;
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px dashed var(--line)", paddingTop: "10px", fontSize: "10px", color: "var(--ink-mute)", letterSpacing: ".04em" }}>
        <span>{t(footKey)}</span><a href={link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)", textDecoration: "none" }}>{t(linkKey)}</a>
      </div>
    </div>
  );
}

/* ═══════════════════════════════ COMMS ════════════════════════════════════ */
function CommsScreen() {
  const { t } = useLang();
  return (
    <Screen>
      <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "-.02em", margin: "0 0 4px", color: "var(--ink)" }}>
        <span style={{ color: "var(--teal)" }}>04 // </span>{t("comms-title-h")}
      </h2>
      <div style={{ color: "var(--ink-mute)", fontSize: "10.5px", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: "18px" }}>
        <span style={{ color: "var(--teal)" }}>●</span> {t("comms-sub")}
      </div>

      <CommLink href="mailto:c.winkel.pro@gmail.com"
        icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="15" height="15"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>}
        label="primary · email" value="c.winkel.pro@gmail.com" arrow />

      <CommLink href="https://github.com/Christophe741" target="_blank"
        icon={<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.06c-3.2.69-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.35.78 1.05.78 2.12v3.15c0 .31.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" /></svg>}
        label="repository · github" value="github.com/Christophe741" arrow />

      <CommRow icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="15" height="15"><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /><circle cx="12" cy="12" r="5" /></svg>}
        label={t("comm-loc-lbl")} value={t("comm-loc-val-s")} />

      <CommRow icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="15" height="15"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>}
        label={t("comm-resp-lbl")} value="< 24h" />

      {/* Terminal prompt */}
      <div style={{ marginTop: "12px", border: "1px solid var(--teal-line)", borderRadius: "5px", padding: "14px", background: "rgba(94,234,212,.04)" }}>
        <div style={{ fontSize: "9.5px", color: "var(--teal)", letterSpacing: ".16em", textTransform: "uppercase", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 6px var(--teal)", display: "inline-block" }} />
          {t("comp-lbl")}
        </div>
        <div style={{ fontSize: "11.5px", color: "var(--ink-dim)", lineHeight: 1.7 }}>
          <span style={{ color: "var(--teal)" }}>$</span> ping --to christophe
        </div>
        <div style={{ fontSize: "11.5px", color: "var(--ink-dim)", lineHeight: 1.7 }}>
          <span style={{ color: "var(--teal)" }}>›</span> {t("comp-prompt")}
        </div>
      </div>

      <div style={{ textAlign: "center", fontSize: "9px", color: "var(--ink-mute)", letterSpacing: ".12em", margin: "18px 0 0" }}>
        {"// "}you are stardust · <span style={{ color: "var(--teal)" }}>running on purpose</span>
      </div>
    </Screen>
  );
}

function CommLink({ href, target, icon, label, value, arrow }: {
  href: string; target?: string; icon: React.ReactNode;
  label: string; value: string; arrow?: boolean;
}) {
  return (
    <a href={href} target={target} rel={target ? "noopener noreferrer" : undefined}
      style={{ display: "flex", alignItems: "center", gap: "11px", padding: "13px 14px", border: "1px solid var(--line)", borderRadius: "5px", background: "rgba(10,18,38,.55)", marginBottom: "8px", textDecoration: "none", color: "inherit" }}>
      <CommIcon>{icon}</CommIcon>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "9px", color: "var(--ink-mute)", letterSpacing: ".16em", textTransform: "uppercase" }}>{label}</div>
        <div style={{ fontSize: "12.5px", color: "var(--ink)", wordBreak: "break-all", marginTop: "2px" }}>{value}</div>
      </div>
      {arrow && <span style={{ color: "var(--ink-mute)", fontSize: "14px" }}>→</span>}
    </a>
  );
}

function CommRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "11px", padding: "13px 14px", border: "1px solid var(--line)", borderRadius: "5px", background: "rgba(10,18,38,.55)", marginBottom: "8px" }}>
      <CommIcon>{icon}</CommIcon>
      <div>
        <div style={{ fontSize: "9px", color: "var(--ink-mute)", letterSpacing: ".16em", textTransform: "uppercase" }}>{label}</div>
        <div style={{ fontSize: "12.5px", color: "var(--ink)", marginTop: "2px" }}>{value}</div>
      </div>
    </div>
  );
}

function CommIcon({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: "34px", height: "34px", border: "1px solid var(--teal-line)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal)", flex: "0 0 34px" }}>
      {children}
    </div>
  );
}
