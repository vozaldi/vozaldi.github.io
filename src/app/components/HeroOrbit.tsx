import { useEffect, useRef, useCallback } from "react";
import { chronoRef, setOrbitElement } from "./Starfield";

export default function HeroOrbit() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOrbitElement(rootRef.current);
    return () => setOrbitElement(null);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cycleOrbit = () => {
      const chips = Array.from(root.querySelectorAll<HTMLElement>("[data-orbit]"));
      if (!chips.length) return;
      const n = 1 + Math.floor(Math.random() * 2);
      const pool = chips.map((_, i) => i);
      const on = new Set<number>();
      while (on.size < n && pool.length) {
        const k = Math.floor(Math.random() * pool.length);
        on.add(pool.splice(k, 1)[0]);
      }
      chips.forEach((c, i) => {
        const active = on.has(i);
        c.style.transition = "border-color .7s ease,color .7s ease,box-shadow .7s ease";
        c.style.borderColor = active ? "var(--accent)" : "var(--border)";
        c.style.color = active ? "var(--text)" : "var(--muted)";
        c.style.boxShadow = active ? "0 0 20px var(--accent-soft)" : "none";
      });
    };

    cycleOrbit();
    const timer = setInterval(cycleOrbit, 5000);
    return () => clearInterval(timer);
  }, []);

  const freezeOrbit = useCallback((on: boolean) => {
    const root = rootRef.current;
    if (!root) return;
    root.style.animationPlayState = on ? "paused" : "";
    root.querySelectorAll<HTMLElement>("*").forEach((el) => {
      el.style.animationPlayState = on ? "paused" : "";
    });
  }, []);

  const onEnter = useCallback(() => {
    chronoRef.active = true;
    freezeOrbit(true);
  }, [freezeOrbit]);

  const onLeave = useCallback(() => {
    chronoRef.active = false;
    freezeOrbit(false);
  }, [freezeOrbit]);

  return (
    <div
      ref={rootRef}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      className="relative flex items-center justify-center"
      style={{
        width: "min(410px,86vw)",
        height: "min(410px,86vw)",
        animation: "floaty 7s ease-in-out infinite",
      }}
    >
      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: "1px solid var(--border)",
          animation: "spin 46s linear infinite",
        }}
      >
        {/* Top chip: Laravel */}
        <div className="absolute top-[-15px] left-1/2 -translate-x-1/2">
          <div
            data-orbit
            style={{
              animation: "spin-rev 46s linear infinite",
              padding: "6px 13px",
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: "var(--bg2)",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--muted)",
              whiteSpace: "nowrap",
            }}
          >
            Laravel
          </div>
        </div>
        {/* Bottom chip: Next.js */}
        <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2">
          <div
            data-orbit
            style={{
              animation: "spin-rev 46s linear infinite",
              padding: "6px 13px",
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: "var(--bg2)",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--muted)",
              whiteSpace: "nowrap",
            }}
          >
            Next.js
          </div>
        </div>
        {/* Left chip: TypeScript */}
        <div className="absolute top-1/2 left-[-44px] -translate-y-1/2">
          <div
            data-orbit
            style={{
              animation: "spin-rev 46s linear infinite",
              padding: "6px 13px",
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: "var(--bg2)",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--muted)",
              whiteSpace: "nowrap",
            }}
          >
            TypeScript
          </div>
        </div>
      </div>

      {/* Inner ring (dashed, counter-spin) */}
      <div
        className="absolute rounded-full"
        style={{
          inset: 62,
          border: "1px dashed var(--border)",
          animation: "spin-rev 34s linear infinite",
        }}
      >
        {/* Top chip: React Native */}
        <div className="absolute top-[-14px] left-1/2 -translate-x-1/2">
          <div
            data-orbit
            style={{
              animation: "spin 34s linear infinite",
              padding: "5px 11px",
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: "var(--bg2)",
              fontFamily: "var(--font-mono)",
              fontSize: 10.5,
              color: "var(--muted)",
              whiteSpace: "nowrap",
            }}
          >
            React Native
          </div>
        </div>
        {/* Bottom chip: OpenAI */}
        <div className="absolute bottom-[-14px] left-1/2 -translate-x-1/2">
          <div
            data-orbit
            style={{
              animation: "spin 34s linear infinite",
              padding: "5px 11px",
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: "var(--bg2)",
              fontFamily: "var(--font-mono)",
              fontSize: 10.5,
              color: "var(--muted)",
              whiteSpace: "nowrap",
            }}
          >
            OpenAI
          </div>
        </div>
      </div>

      {/* Glow halo */}
      <div
        className="absolute rounded-full"
        style={{
          inset: 128,
          background: "radial-gradient(circle, var(--accent), transparent 66%)",
          filter: "blur(36px)",
          opacity: 0.55,
          animation: "pulse-glow 5s ease-in-out infinite",
        }}
      />

      {/* Core */}
      <div
        className="relative flex flex-col items-center justify-center gap-[5px] rounded-full"
        style={{
          width: "min(138px,34vw)",
          height: "min(138px,34vw)",
          border: "1px solid var(--accent)",
          background: "radial-gradient(circle at 35% 30%, var(--bg2), var(--bg))",
          boxShadow: "0 0 48px rgba(139,92,246,0.4), inset 0 0 30px rgba(139,92,246,0.16)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 28,
            letterSpacing: 1,
            color: "var(--text)",
          }}
        >
          &lt;/&gt;
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            letterSpacing: 2.5,
            color: "var(--accent-text)",
            textTransform: "uppercase",
          }}
        >
          full stack
        </div>
      </div>
    </div>
  );
}
