import Stars from "@/components/Stars";
import TopBar from "@/components/TopBar";

export default function Page() {
  return (
    <>
      <Stars />
      <div className="shell">
        <main>
          <TopBar />
        </main>
      </div>
    </>
  );
}
