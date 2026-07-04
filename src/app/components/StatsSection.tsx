import { STATS } from "src/data/portfolio";
import SpotlightGrid from "./SpotlightGrid";

export default function StatsSection() {
  return (
    <section
      className="mx-auto"
      style={{
        maxWidth: 1280,
        padding: "20px clamp(20px,5vw,40px) 40px",
      }}
    >
      <SpotlightGrid
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: 16,
        }}
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            data-spotlight
            className="relative overflow-hidden hover:!border-[var(--accent)]"
            style={{
              border: "1px solid var(--border)",
              background: "var(--surface)",
              borderRadius: 18,
              padding: "28px 26px",
              transition: "border-color .3s ease",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(30px,4vw,44px)",
                lineHeight: 1,
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                marginTop: 10,
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </SpotlightGrid>
    </section>
  );
}
