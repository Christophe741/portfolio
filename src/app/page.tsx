import Stars from "@/components/Stars";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Telemetry from "@/components/Telemetry";

export default function Page() {
  return (
    <>
      <Stars />
      <div className="shell">
        <TopBar />
        <main>
          <div className="main-grid">
            <div className="col-hero"><Hero /></div>
            <div className="col-tel"><Telemetry /></div>
          </div>
        </main>
      </div>
    </>
  );
}
