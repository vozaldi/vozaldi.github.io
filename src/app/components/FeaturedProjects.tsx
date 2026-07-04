import { useNavigate } from "react-router";
import { FEATURED_PROJECTS, SCREENSHOT } from "src/data/portfolio";
import ScreenshotGallery from "./ScreenshotGallery";

function PlaceholderImage({ label }: { label: string }) {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(135deg, transparent, transparent 11px, var(--surface) 11px, var(--surface) 12px)",
          opacity: 0.85,
        }}
      />
      <div
        className="relative"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "var(--faint)",
        }}
      >
        img · {label}
      </div>
    </>
  );
}

function PlaceholderMark({ mark }: { mark: string }) {
  return (
    <div
      className="relative"
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 40,
        letterSpacing: 1,
        color: "var(--accent-text)",
        opacity: 0.85,
      }}
    >
      {mark}
    </div>
  );
}

export default function FeaturedProjects() {
  const navigate = useNavigate();

  const goProjects = () => {
    navigate("/projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="mx-auto"
      style={{
        maxWidth: 1280,
        padding: "60px clamp(20px,5vw,40px)",
      }}
    >
      <div
        className="flex items-end justify-between flex-wrap"
        style={{ gap: 20, marginBottom: 34 }}
      >
        <div>
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
            Selected Work
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(28px,4vw,42px)",
              letterSpacing: "-0.02em",
              margin: 0,
              color: "var(--text)",
            }}
          >
            Recent projects
          </h2>
        </div>
        <a
          onClick={goProjects}
          className="inline-flex items-center gap-2 no-underline cursor-pointer hover:gap-3"
          style={{
            fontWeight: 600,
            fontSize: 14,
            color: "var(--accent-text)",
            transition: "gap .2s",
          }}
        >
          All projects
          <svg
            width="15"
            height="15"
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
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
        }}
      >
        {FEATURED_PROJECTS.map((f) => (
          <div
            key={f.name}
            onClick={goProjects}
            className="cursor-pointer overflow-hidden hover:-translate-y-1 hover:!border-[var(--accent)]"
            style={{
              border: "1px solid var(--border)",
              background: "var(--surface)",
              borderRadius: 18,
              transition: "transform .25s, border-color .25s",
            }}
          >
            <div
              className="relative flex items-center justify-center overflow-hidden"
              style={{
                aspectRatio: "16/10",
                background: "linear-gradient(135deg, var(--bg2), var(--bg))",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {!!SCREENSHOT[f.mark]?.length ? (
                <ScreenshotGallery
                  className="pointer-events-none"
                  screenshots={SCREENSHOT[f.mark]}
                  projectName={f.name}
                />
              ) : (
                <>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "repeating-linear-gradient(135deg, transparent, transparent 11px, var(--surface) 11px, var(--surface) 12px)",
                      opacity: 0.85,
                    }}
                  />
                  <PlaceholderMark mark={f.mark} />
                </>
              )}
            </div>
            <div style={{ padding: 20 }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "var(--text)",
                }}
              >
                {f.name}
              </div>
              <div
                style={{
                  marginTop: 6,
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: "var(--muted)",
                }}
              >
                {f.tagline}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export { PlaceholderImage, PlaceholderMark };
