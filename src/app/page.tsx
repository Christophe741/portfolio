"use client";

import Stars from "@/components/Stars";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Telemetry from "@/components/Telemetry";
import KpiPanel, { KPIs } from "@/components/KpiPanel";
import Stack from "@/components/Stack";
import Comms from "@/components/Comms";
import Missions from "@/components/Missions";
import LogStream from "@/components/LogStream";

export default function Page() {
  return (
    <>
      <Stars />
      <div className="shell">
        <TopBar />
        <main>
          <div className="main-grid">
            <div className="col-hero">
              <Hero />
            </div>
            <div className="col-tel">
              <Telemetry />
            </div>
            {KPIs.map((kpi) => (
              <div key={kpi.titleKey} className="col-kpi">
                <KpiPanel data={kpi} />
              </div>
            ))}
            <div className="col-stack">
              <Stack />
            </div>
            <div className="col-comms">
              <Comms />
            </div>
            <div className="col-full">
              <Missions />
            </div>
            <div className="col-full">
              <LogStream />
            </div>
          </div>
        </main>
        <footer className="botbar">
          <div className="botbar-l">
            <span>© 2026 · CHRISTOPHE WINKEL</span>
            <span>
              {"// "}you are stardust ·{" "}
              <span style={{ color: "var(--teal)" }}>running on purpose</span>
            </span>
          </div>
          <div className="botbar-r">
            <span>build · stable</span>
            <span>v1.0.0</span>
            <span style={{ color: "var(--teal)" }}>cwk-01</span>
          </div>
        </footer>
      </div>
    </>
  );
}
