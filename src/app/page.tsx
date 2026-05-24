import Stars from "@/components/Stars";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <>
      <Stars />
      <div className="shell">
        <TopBar />
        <main>
          <Hero />
        </main>
      </div>
    </>
  );
}
