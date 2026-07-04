import { useNavigate } from "react-router";
import HeroOrbit from "./HeroOrbit";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      data-hero-section
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: "100vh",
        padding: "130px 0 80px",
      }}
    >
      <div
        className="mx-auto flex flex-wrap items-center gap-12 w-full"
        style={{
          maxWidth: 1280,
          padding: "0 clamp(20px,5vw,40px)",
        }}
      >
        {/* Left: Text */}
        <div style={{ flex: "1 1 420px", minWidth: 300 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "var(--accent-text)",
              marginBottom: 22,
              animation: "fade-up .7s ease both",
            }}
          >
            Senior Software Engineer · 10+ Years
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(42px,6vw,84px)",
              letterSpacing: "-0.03em",
              lineHeight: 0.94,
              margin: 0,
              color: "var(--text)",
              animation: "time-walk .95s cubic-bezier(.2,.7,.2,1) both",
              animationDelay: ".06s",
            }}
          >
            Aldila
            <br />
            Rochidias
          </h1>
          <p
            style={{
              maxWidth: 520,
              margin: "28px 0 0",
              fontSize: "clamp(16px,1.6vw,20px)",
              lineHeight: 1.6,
              color: "var(--muted)",
              animation: "fade-up .7s ease both",
              animationDelay: ".12s",
            }}
          >
            I build reliable web, mobile, and AI systems end&#8209;to&#8209;end
            &mdash; from{" "}
            <span style={{ color: "var(--text)", fontWeight: 600 }}>
              Laravel
            </span>{" "}
            backends to{" "}
            <span style={{ color: "var(--text)", fontWeight: 600 }}>
              Next.js
            </span>{" "}
            and{" "}
            <span style={{ color: "var(--text)", fontWeight: 600 }}>
              React Native
            </span>
            , now going deep on RAG and agentic tooling.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-[14px]"
            style={{
              marginTop: 36,
              animation: "fade-up .7s ease both",
              animationDelay: ".18s",
            }}
          >
            <a
              onClick={() => {
                navigate("/projects");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-[9px] cursor-pointer no-underline hover:-translate-y-0.5"
              style={{
                padding: "15px 26px",
                borderRadius: 13,
                background: "var(--accent)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                boxShadow: "0 10px 34px rgba(139,92,246,0.4)",
                transition: "transform .2s, box-shadow .2s",
              }}
            >
              View Projects
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="/assets/documents/resume-aldila-rochidias-full-stack-engineer.pdf"
              download
              className="inline-flex items-center gap-[9px] no-underline hover:bg-[var(--surface)]"
              style={{
                padding: "15px 26px",
                borderRadius: 13,
                background: "transparent",
                border: "1px solid var(--border)",
                color: "var(--text)",
                fontWeight: 600,
                fontSize: 15,
                transition: "background .2s",
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
          </div>

          <div
            style={{
              marginTop: 26,
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: 1,
              color: "var(--faint)",
              animation: "fade-up .7s ease both",
              animationDelay: ".24s",
            }}
          >
            calm as a gravity well · precise to the millisecond
          </div>
        </div>

        {/* Right: Orbit */}
        <div
          className="flex justify-center"
          style={{
            flex: "0 1 380px",
            minWidth: 260,
            animation: "fade-up .8s ease both",
            animationDelay: ".14s",
          }}
        >
          <HeroOrbit />
        </div>
      </div>
    </section>
  );
}
