export default function ProfileSection() {
  return (
    <section
      className="mx-auto"
      style={{
        maxWidth: 1280,
        padding: "70px clamp(20px,5vw,40px)",
      }}
    >
      <div className="flex flex-wrap items-start" style={{ gap: "16px 60px" }}>
        <div style={{ flex: "0 0 auto" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "var(--accent-text)",
            }}
          >
            Profile
          </div>
        </div>
        <p
          style={{
            flex: "1 1 520px",
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(20px,2.5vw,30px)",
            lineHeight: 1.5,
            letterSpacing: "-0.01em",
            color: "var(--text)",
            textWrap: "pretty",
          }}
        >
          Software engineer with{" "}
          <span style={{ color: "var(--accent-text)" }}>10+ years</span>{" "}
          delivering web apps, backend systems, and mobile apps across Laravel,
          Next.js, and React Native. I enjoy building dependable systems,
          sharpening workflows, and integrating practical AI &mdash;{" "}
          <span style={{ color: "var(--accent-text)" }}>
            RAG pipelines, agentic workflows, and automation tooling
          </span>
          .
        </p>
      </div>
    </section>
  );
}
