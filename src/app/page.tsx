import Stars from "@/components/Stars";

export default function Page() {
  return (
    <>
      <Stars />
      <main
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <p
          style={{ color: "var(--teal)", fontFamily: "var(--font-jetbrains)" }}
        >
          portfolio · en cours
        </p>
      </main>
    </>
  );
}
