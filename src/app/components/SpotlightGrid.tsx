import { useEffect, useRef } from "react";

export default function SpotlightGrid({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const paint = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>("[data-spotlight]");
      const cards = container.querySelectorAll<HTMLElement>("[data-spotlight]");
      cards.forEach((c) => {
        if (c !== card) c.style.backgroundImage = "none";
      });
      if (!card) return;
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      card.style.backgroundImage = `radial-gradient(240px circle at ${x}px ${y}px, var(--accent-soft), transparent 68%)`;
    };

    const clear = () => {
      container.querySelectorAll<HTMLElement>("[data-spotlight]").forEach((c) => {
        c.style.backgroundImage = "none";
      });
    };

    container.addEventListener("mousemove", paint);
    container.addEventListener("mouseleave", clear);
    return () => {
      container.removeEventListener("mousemove", paint);
      container.removeEventListener("mouseleave", clear);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
