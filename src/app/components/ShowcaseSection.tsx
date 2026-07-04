import { useEffect, useState, useCallback, useRef } from "react";
import { SHOWCASE_PRODUCTS } from "src/data/portfolio";

export default function ShowcaseSection() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SHOWCASE_PRODUCTS.length);
    }, 4200);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const goTo = useCallback(
    (i: number) => {
      setIndex(i);
      startTimer();
    },
    [startTimer]
  );

  const name = SHOWCASE_PRODUCTS[index];
  const counter = `${String(index + 1).padStart(2, "0")} / ${String(SHOWCASE_PRODUCTS.length).padStart(2, "0")}`;

  return (
    <section
      className="mx-auto"
      style={{
        maxWidth: 1280,
        padding: "30px clamp(20px,5vw,40px) 60px",
      }}
    >
      {/* Header */}
      <div
        className="flex items-end justify-between flex-wrap"
        style={{ gap: 20, marginBottom: 26 }}
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
            Showcase
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
            Products I've shipped
          </h2>
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: 1,
            color: "var(--faint)",
          }}
        >
          {counter}
        </div>
      </div>

      {/* Browser window */}
      <div
        className="mx-auto overflow-hidden"
        style={{
          maxWidth: 980,
          border: "1px solid var(--border)",
          borderRadius: 18,
          background: "var(--bg2)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
        }}
      >
        {/* Titlebar */}
        <div
          className="flex items-center gap-[7px]"
          style={{
            padding: "12px 16px",
            borderBottom: "1px solid var(--border)",
            background: "var(--surface)",
          }}
        >
          <span
            className="rounded-full"
            style={{ width: 11, height: 11, background: "#ec6a5e" }}
          />
          <span
            className="rounded-full"
            style={{ width: 11, height: 11, background: "#f4bf4f" }}
          />
          <span
            className="rounded-full"
            style={{ width: 11, height: 11, background: "#61c554" }}
          />
          <span
            style={{
              marginLeft: 12,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: 1,
              color: "var(--faint)",
            }}
          >
            product-showcase · Aldila Rochidias
          </span>
        </div>

        {/* Image area */}
        <div
          className="relative flex items-center justify-center overflow-hidden"
          style={{
            aspectRatio: "16/9",
            background: "linear-gradient(135deg, var(--bg2), var(--bg))",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(135deg, transparent, transparent 15px, var(--surface) 15px, var(--surface) 16px)",
              opacity: 0.85,
            }}
          />
          <div
            key={index}
            style={{
              position: "relative",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "var(--faint)",
              animation: "role-in .55s ease both",
            }}
          >
            img · {name}
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="text-center" style={{ marginTop: 22, minHeight: 26 }}>
        <div
          key={index}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 18,
            color: "var(--text)",
            animation: "role-in .55s ease both",
          }}
        >
          {name}
        </div>
      </div>

      {/* Dots */}
      <div
        className="flex justify-center gap-[9px]"
        style={{ marginTop: 16 }}
      >
        {SHOWCASE_PRODUCTS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label="Go to slide"
            style={{
              width: i === index ? 26 : 8,
              height: 8,
              borderRadius: 999,
              border: "none",
              padding: 0,
              cursor: "pointer",
              background: i === index ? "var(--accent)" : "var(--border)",
              transition: "width .35s ease, background .35s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
