import { useEffect, useRef, useCallback } from "react";
import { EXPERIENCE } from "src/data/portfolio";

export default function ExperienceTimeline() {
  const rootRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const hoverIndexRef = useRef<number | null>(null);

  const spyExperience = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    const rows = Array.from(root.querySelectorAll<HTMLElement>("[data-exp-index]"));
    if (!rows.length) return;

    let active = 0;
    if (
      hoverIndexRef.current !== null &&
      hoverIndexRef.current >= 0 &&
      hoverIndexRef.current < rows.length
    ) {
      active = hoverIndexRef.current;
    } else {
      const focus = window.innerHeight * 0.42;
      let best = Infinity;
      rows.forEach((row, i) => {
        const r = row.getBoundingClientRect();
        const anchor = r.top + Math.min(r.height, 70) / 2;
        const d = Math.abs(anchor - focus);
        if (d < best) {
          best = d;
          active = i;
        }
      });
    }

    rows.forEach((row, i) => {
      const on = i === active;
      row.style.opacity = on ? "1" : "0.4";
      row.style.transform = on ? "translateX(6px)" : "translateX(0)";
      row.style.background = on
        ? "linear-gradient(90deg, var(--accent-soft), transparent 74%)"
        : "transparent";
      const dot = row.querySelector<HTMLElement>("[data-dot]");
      if (dot) {
        dot.style.background = on ? "var(--accent)" : "var(--bg)";
        dot.style.transform = on ? "scale(1.55)" : "scale(1)";
        dot.style.boxShadow = on
          ? "0 0 20px var(--accent)"
          : "0 0 12px rgba(139,92,246,0.45)";
      }
      const title = row.querySelector<HTMLElement>("[data-title]");
      if (title) {
        title.style.color = on ? "var(--accent-text)" : "var(--text)";
      }
    });

    const fill = fillRef.current;
    if (fill) {
      const activeRow = rows[active];
      const rr = activeRow.getBoundingClientRect();
      const rootR = root.getBoundingClientRect();
      const h = rr.top - rootR.top + Math.min(rr.height, 70) / 2 + 8;
      fill.style.height = `${Math.max(0, h)}px`;
    }
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          spyExperience();
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    requestAnimationFrame(spyExperience);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [spyExperience]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onMove = (e: MouseEvent) => {
      const row = (e.target as HTMLElement).closest<HTMLElement>("[data-exp-index]");
      const idx = row ? parseInt(row.getAttribute("data-exp-index")!, 10) : null;
      if (idx !== hoverIndexRef.current) {
        hoverIndexRef.current = idx;
        spyExperience();
      }
    };
    const onLeave = () => {
      if (hoverIndexRef.current !== null) {
        hoverIndexRef.current = null;
        spyExperience();
      }
    };

    root.addEventListener("mousemove", onMove);
    root.addEventListener("mouseleave", onLeave);
    return () => {
      root.removeEventListener("mousemove", onMove);
      root.removeEventListener("mouseleave", onLeave);
    };
  }, [spyExperience]);

  return (
    <section
      className="mx-auto"
      style={{
        maxWidth: 1280,
        padding: "60px clamp(20px,5vw,40px)",
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
        Experience
      </div>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(28px,4vw,42px)",
          letterSpacing: "-0.02em",
          margin: "0 0 40px",
          color: "var(--text)",
        }}
      >
        Where I've worked
      </h2>

      <div
        ref={rootRef}
        className="relative"
        style={{
          maxWidth: 900,
          borderLeft: "1px solid var(--border)",
          marginLeft: 6,
        }}
      >
        {/* Fill line */}
        <div
          ref={fillRef}
          className="absolute"
          style={{
            left: -1,
            top: 0,
            width: 2,
            height: 0,
            background: "linear-gradient(var(--accent), transparent)",
            boxShadow: "0 0 12px var(--accent)",
            transition: "height .4s cubic-bezier(.4,0,.15,1)",
            pointerEvents: "none",
            borderRadius: 2,
          }}
        />

        {EXPERIENCE.map((e, i) => (
          <div
            key={i}
            data-exp-index={i}
            className="relative"
            style={{
              padding: "14px 14px 20px 30px",
              marginBottom: 14,
              borderRadius: 12,
              transition: "opacity .4s ease, transform .4s ease, background .4s ease",
            }}
          >
            <span
              data-dot
              className="absolute rounded-full"
              style={{
                left: -6,
                top: 19,
                width: 11,
                height: 11,
                background: "var(--bg)",
                border: "2px solid var(--accent)",
                boxShadow: "0 0 12px rgba(139,92,246,0.5)",
                transition: "background .35s ease, transform .35s ease, box-shadow .35s ease",
              }}
            />
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: 1,
                color: "var(--accent-text)",
                marginBottom: 6,
              }}
            >
              {e.period}
            </div>
            <div
              data-title
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 19,
                color: "var(--text)",
                transition: "color .35s ease",
              }}
            >
              {e.role} ·{" "}
              <span style={{ color: "var(--muted)", fontWeight: 500 }}>
                {e.company}
              </span>
            </div>
            <div
              style={{
                marginTop: 6,
                fontSize: 14.5,
                lineHeight: 1.55,
                color: "var(--muted)",
                maxWidth: 640,
              }}
            >
              {e.desc}
            </div>
            {"techstack" in e && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                {(e as typeof e & { techstack: string[] }).techstack.map((tech: string) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      padding: "3px 10px",
                      borderRadius: 99,
                      background: "var(--accent-soft)",
                      color: "var(--accent-text)",
                      border: "1px solid var(--accent)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
