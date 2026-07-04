import { SOCIAL } from "src/data/portfolio";

export default function CtaSection() {
  return (
    <section
      className="mx-auto"
      style={{
        maxWidth: 1280,
        padding: "70px clamp(20px,5vw,40px) 90px",
      }}
    >
      <div
        className="relative overflow-hidden text-center"
        style={{
          border: "1px solid var(--border)",
          borderRadius: 26,
          padding: "clamp(36px,6vw,72px)",
          background: "var(--surface)",
        }}
      >
        {/* Radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-40%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, var(--accent), transparent 65%)",
            opacity: 0.16,
            filter: "blur(20px)",
          }}
        />

        <h2
          className="relative"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(28px,4.5vw,50px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            margin: 0,
            color: "var(--text)",
            textWrap: "balance",
          }}
        >
          Looking for a senior engineer who ships?
        </h2>
        <p
          className="relative mx-auto"
          style={{
            maxWidth: 520,
            margin: "18px auto 0",
            fontSize: 16,
            lineHeight: 1.6,
            color: "var(--muted)",
          }}
        >
          Full-time, ready to build. Grab the r&eacute;sum&eacute; or reach out
          directly.
        </p>

        <div
          className="relative flex flex-wrap gap-[14px] justify-center"
          style={{ marginTop: 34 }}
        >
          <a
            href="#"
            download
            className="inline-flex items-center gap-[9px] no-underline hover:-translate-y-0.5"
            style={{
              padding: "15px 26px",
              borderRadius: 13,
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              boxShadow: "0 10px 34px rgba(139,92,246,0.4)",
              transition: "transform .2s",
            }}
          >
            Download R&eacute;sum&eacute;
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
            </svg>
          </a>
          <a
            href={`mailto:${SOCIAL.email}`}
            className="inline-flex items-center gap-[9px] no-underline hover:bg-[var(--surface-hover)]"
            style={{
              padding: "15px 26px",
              borderRadius: 13,
              border: "1px solid var(--border)",
              color: "var(--text)",
              fontWeight: 600,
              fontSize: 15,
              transition: "background .2s",
            }}
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
