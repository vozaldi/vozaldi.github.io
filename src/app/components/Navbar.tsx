import { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router";
import { useTheme } from "../hooks/useTheme";
import { SOCIAL } from "src/data/portfolio";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );

  const isDesktop = width >= 860;
  const isAbout = location.pathname === "/";
  const isProjects = location.pathname === "/projects";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const goTo = useCallback(
    (path: string) => {
      navigate(path);
      setDrawerOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate]
  );

  return (
    <>
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-60"
        style={{
          background: scrolled
            ? isDark
              ? "rgba(8,8,13,0.78)"
              : "rgba(242,241,247,0.80)"
            : "transparent",
          backdropFilter: scrolled ? "saturate(180%) blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "saturate(180%) blur(16px)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
          transition: "background .35s ease, border-color .35s ease",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{
            maxWidth: 1280,
            padding: "0 clamp(20px,5vw,40px)",
            height: 74,
          }}
        >
          {/* Logo */}
          <div
            onClick={() => goTo("/")}
            className="relative flex items-center gap-3 cursor-pointer select-none"
            style={{ padding: "7px 9px", margin: "-7px -9px", borderRadius: 14 }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: 40,
                height: 40,
                borderRadius: 11,
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--text)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: 1,
              }}
            >
              AR
            </div>
            <div
              style={{
                lineHeight: 1.06,
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 13.5,
                color: "var(--text)",
              }}
            >
              Aldila
              <br />
              Rochidias
            </div>
          </div>

          {/* Desktop nav */}
          {isDesktop && (
            <div className="flex items-center gap-[30px]">
              <a
                onClick={() => goTo("/")}
                className="cursor-pointer no-underline hover:!opacity-100"
                style={{
                  opacity: isAbout ? 1 : 0.5,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text)",
                  letterSpacing: ".01em",
                  transition: "opacity .3s",
                }}
              >
                About
              </a>
              <a
                onClick={() => goTo("/projects")}
                className="cursor-pointer no-underline hover:!opacity-100"
                style={{
                  opacity: isProjects ? 1 : 0.5,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text)",
                  letterSpacing: ".01em",
                  transition: "opacity .3s",
                }}
              >
                Projects
              </a>
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-[7px] no-underline hover:!opacity-100"
                style={{
                  opacity: 0.5,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text)",
                  transition: "opacity .3s",
                }}
              >
                GitHub
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </a>
              <ThemeButton isDark={isDark} toggle={toggle} />
            </div>
          )}

          {/* Mobile nav */}
          {!isDesktop && (
            <div className="flex items-center gap-[10px]">
              <ThemeButton isDark={isDark} toggle={toggle} />
              <button
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 11,
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  color: "var(--text)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Drawer overlay */}
      <div
        onClick={() => setDrawerOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 70,
          background: "rgba(4,4,8,0.6)",
          opacity: drawerOpen ? 1 : 0,
          pointerEvents: drawerOpen ? "auto" : "none",
          transition: "opacity .35s ease",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Drawer */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 80,
          width: "min(280px,82vw)",
          display: "flex",
          flexDirection: "column",
          background: "var(--bg2)",
          borderLeft: "1px solid var(--border)",
          transform: drawerOpen ? "translateX(0)" : "translateX(106%)",
          transition: "transform .38s cubic-bezier(.4,0,.15,1)",
          boxShadow: "-30px 0 60px rgba(0,0,0,0.4)",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{
            padding: "18px 20px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            className="flex items-center justify-center"
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              border: "1px solid var(--border)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 1,
              color: "var(--text)",
              background: "var(--surface)",
            }}
          >
            AR
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              border: "1px solid var(--border)",
              background: "transparent",
              color: "var(--text)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col" style={{ padding: 14 }}>
          <a
            onClick={() => goTo("/")}
            className="cursor-pointer no-underline hover:bg-[var(--surface)]"
            style={{
              padding: "14px 12px",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 19,
              color: "var(--text)",
              borderRadius: 10,
              transition: "background .2s",
            }}
          >
            About
          </a>
          <a
            onClick={() => goTo("/projects")}
            className="cursor-pointer no-underline hover:bg-[var(--surface)]"
            style={{
              padding: "14px 12px",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 19,
              color: "var(--text)",
              borderRadius: 10,
              transition: "background .2s",
            }}
          >
            Projects
          </a>
        </div>
        <div
          className="mt-auto flex justify-end"
          style={{
            padding: 20,
            borderTop: "1px solid var(--border)",
          }}
        >
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center hover:bg-[var(--surface)]"
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
          >
            <GitHubIcon size={20} />
          </a>
        </div>
      </aside>
    </>
  );
}

function ThemeButton({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="hover:bg-[var(--surface-hover)]"
      style={{
        width: 40,
        height: 40,
        borderRadius: 11,
        border: "1px solid var(--border)",
        background: "var(--surface)",
        color: "var(--text)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background .25s",
      }}
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
        </svg>
      )}
    </button>
  );
}

export function GitHubIcon({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
