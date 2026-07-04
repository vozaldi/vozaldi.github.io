import { SKILLS } from "src/data/portfolio";
import SpotlightGrid from "./SpotlightGrid";

export default function SkillsSection() {
  return (
    <section
      className="mx-auto"
      style={{
        maxWidth: 1280,
        padding: "50px clamp(20px,5vw,40px)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "var(--accent-text)",
          marginBottom: 12,
        }}
      >
        Stack
      </div>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(28px,4vw,42px)",
          letterSpacing: "-0.02em",
          margin: "0 0 34px",
          color: "var(--text)",
        }}
      >
        Tools I reach for
      </h2>
      <SpotlightGrid
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 18,
        }}
      >
        {SKILLS.map((g) => (
          <div
            key={g.label}
            data-spotlight
            className="relative overflow-hidden hover:!border-[var(--accent)]"
            style={{
              border: "1px solid var(--border)",
              background: "var(--surface)",
              borderRadius: 18,
              padding: 24,
              transition: "border-color .3s ease",
            }}
          >
            <div
              className="flex items-center gap-[9px]"
              style={{ marginBottom: 16 }}
            >
              <span
                className="rounded-full"
                style={{
                  width: 7,
                  height: 7,
                  background: "var(--accent)",
                  boxShadow: "0 0 10px var(--accent)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "var(--text)",
                }}
              >
                {g.label}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "6px 12px",
                    border: "1px solid var(--border)",
                    borderRadius: 999,
                    fontSize: 13,
                    color: "var(--muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </SpotlightGrid>
    </section>
  );
}
