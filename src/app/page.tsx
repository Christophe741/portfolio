"use client";

import Stars from "@/components/Stars";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Telemetry from "@/components/Telemetry";
import KpiPanel, { KPIs } from "@/components/KpiPanel";

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
          </div>
        </main>
      </div>
    </>
  );
}
