import { useState, useCallback } from "react";
import {
  PROJECTS,
  BERKARIR_SECTORS,
  BERKARIR_STACK,
} from "src/data/portfolio";

export default function ProjectsPage() {
  const [gallery, setGallery] = useState<Record<string, number>>({});

  const setGalleryIndex = useCallback((name: string, i: number) => {
    setGallery((prev) => ({ ...prev, [name]: i }));
  }, []);

  return (
    <section style={{ padding: "130px 0 90px" }}>
      <div
        className="mx-auto"
        style={{
          maxWidth: 1280,
          padding: "0 clamp(20px,5vw,40px)",
        }}
      >
        {/* Header */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "var(--accent-text)",
            marginBottom: 14,
          }}
        >
          Selected Work
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(38px,6vw,72px)",
            letterSpacing: "-0.03em",
            margin: 0,
            color: "var(--text)",
          }}
        >
          Projects
        </h1>
        <p
          style={{
            maxWidth: 560,
            margin: "18px 0 0",
            fontSize: 16,
            lineHeight: 1.6,
            color: "var(--muted)",
          }}
        >
          A decade of shipping across web, mobile, IoT, and AI &mdash; for teams
          building real products.
        </p>

        {/* Berkarir Feature Block */}
        <div
          className="overflow-hidden"
          style={{
            marginTop: 48,
            border: "1px solid var(--border)",
            background: "var(--surface)",
            borderRadius: 22,
          }}
        >
          <div className="flex flex-wrap">
            {/* Left: Screenshot area */}
            <div
              className="relative flex items-center justify-center overflow-hidden"
              style={{
                flex: "1 1 340px",
                minWidth: 280,
                minHeight: 300,
                background: "linear-gradient(135deg, var(--bg2), var(--bg))",
                borderRight: "1px solid var(--border)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "repeating-linear-gradient(135deg, transparent, transparent 13px, var(--surface) 13px, var(--surface) 14px)",
                  opacity: 0.85,
                }}
              />
              <div
                className="absolute"
                style={{
                  top: 18,
                  left: 18,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "var(--accent-text)",
                  border: "1px solid var(--accent)",
                  borderRadius: 999,
                  padding: "5px 11px",
                }}
              >
                Featured · Platform Suite
              </div>
              <div
                className="relative"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "var(--faint)",
                }}
              >
                img · Berkarir
              </div>
            </div>

            {/* Right: Info */}
            <div
              className="flex flex-col justify-center"
              style={{
                flex: "1 1 360px",
                minWidth: 280,
                padding: "clamp(28px,4vw,48px)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: 1,
                  color: "var(--accent-text)",
                  marginBottom: 10,
                }}
              >
                Full Stack Developer · Apr 2025 — Present
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(26px,3.4vw,38px)",
                  letterSpacing: "-0.02em",
                  margin: 0,
                  color: "var(--text)",
                }}
              >
                Berkarir
              </h2>
              <p
                style={{
                  margin: "14px 0 0",
                  fontSize: 15.5,
                  lineHeight: 1.6,
                  color: "var(--muted)",
                  maxWidth: 460,
                }}
              >
                A white-label Learning Management System I build full-stack — a
                Next.js frontend on a Laravel REST API, cloned and rebranded
                across multiple exam-prep sectors. Adaptive computer-based
                testing (CAT / IRT), live classes, a protected PDF viewer,
                gamified XP, and Midtrans payments — built to handle high
                concurrency during live events.
              </p>
              <div className="flex flex-wrap gap-2" style={{ marginTop: 22 }}>
                {BERKARIR_STACK.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "6px 12px",
                      border: "1px solid var(--border)",
                      borderRadius: 999,
                      fontSize: 13,
                      color: "var(--muted)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sector Platforms */}
          <div
            style={{
              borderTop: "1px solid var(--border)",
              padding: "clamp(24px,3.4vw,38px)",
            }}
          >
            <div
              className="flex items-center flex-wrap"
              style={{ gap: 12, marginBottom: 20 }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "var(--accent-text)",
                }}
              >
                Sector Platforms
              </span>
              <span
                style={{
                  height: 1,
                  flex: 1,
                  minWidth: 20,
                  background: "var(--border)",
                }}
              />
              <span
                style={{
                  fontSize: 12.5,
                  color: "var(--faint)",
                }}
              >
                One codebase · white-label cloned · rebranded per institution
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                gap: 14,
              }}
            >
              {BERKARIR_SECTORS.map((s) => (
                <div
                  key={s.code}
                  className="flex flex-col gap-[10px] hover:-translate-y-[3px] hover:!border-[var(--accent)]"
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: 14,
                    padding: 18,
                    background: "var(--bg2)",
                    transition: "border-color .25s, transform .25s",
                  }}
                >
                  <div>
                    <span
                      className="inline-block"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: 0.5,
                        color: "var(--accent-text)",
                        border: "1px solid var(--accent)",
                        borderRadius: 7,
                        padding: "3px 9px",
                      }}
                    >
                      {s.code}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 15,
                      color: "var(--text)",
                    }}
                  >
                    {s.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      lineHeight: 1.5,
                      color: "var(--muted)",
                    }}
                  >
                    {s.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div
          style={{
            marginTop: 24,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {PROJECTS.map((p) => {
            const shotCount = p.shotCount || 3;
            const gi = (gallery[p.name] || 0) % shotCount;

            return (
              <div
                key={p.name}
                className="flex flex-col overflow-hidden hover:-translate-y-1 hover:!border-[var(--accent)]"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  borderRadius: 20,
                  transition: "transform .25s, border-color .25s",
                }}
              >
                {/* Image area */}
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{
                    aspectRatio: "16/10",
                    background:
                      "linear-gradient(135deg, var(--bg2), var(--bg))",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "repeating-linear-gradient(135deg, transparent, transparent 11px, var(--surface) 11px, var(--surface) 12px)",
                      opacity: 0.85,
                    }}
                  />
                  {p.hasScreenshot ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 11,
                          letterSpacing: 2,
                          textTransform: "uppercase",
                          color: "var(--faint)",
                        }}
                      >
                        img · {p.name} · {gi + 1}/{shotCount}
                      </div>
                      {/* Gallery dots */}
                      <div
                        className="absolute flex justify-center gap-[7px]"
                        style={{
                          bottom: 12,
                          left: 0,
                          right: 0,
                          zIndex: 2,
                        }}
                      >
                        {Array.from({ length: shotCount }).map((_, i) => (
                          <button
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation();
                              setGalleryIndex(p.name, i);
                            }}
                            aria-label="Show screenshot"
                            style={{
                              width: i === gi ? 22 : 7,
                              height: 7,
                              borderRadius: 999,
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                              background:
                                i === gi ? "var(--accent)" : "var(--border)",
                              transition: "width .3s ease, background .3s ease",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="relative flex items-center justify-center">
                      <div
                        className="absolute rounded-full"
                        style={{
                          width: 96,
                          height: 96,
                          border: "1px dashed var(--border)",
                          animation: "spin 30s linear infinite",
                        }}
                      />
                      <div
                        className="relative"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: 38,
                          letterSpacing: 1,
                          color: "var(--accent-text)",
                          opacity: 0.9,
                        }}
                      >
                        {p.mark}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div
                  className="flex flex-col flex-1"
                  style={{ padding: 22 }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11.5,
                      letterSpacing: 0.5,
                      color: "var(--accent-text)",
                      marginBottom: 9,
                    }}
                  >
                    {p.role} · {p.period}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 20,
                      color: "var(--text)",
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    className="flex-1"
                    style={{
                      marginTop: 8,
                      fontSize: 14,
                      lineHeight: 1.55,
                      color: "var(--muted)",
                    }}
                  >
                    {p.tagline}
                  </div>
                  <div className="flex flex-wrap gap-[7px]" style={{ marginTop: 18 }}>
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "5px 11px",
                          border: "1px solid var(--border)",
                          borderRadius: 999,
                          fontSize: 12.5,
                          color: "var(--muted)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
