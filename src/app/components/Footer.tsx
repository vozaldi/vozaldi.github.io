import { useEffect, useState } from "react";
import { SOCIAL, ROLES } from "src/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./Navbar";

export default function Footer() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg2)",
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: 1280,
          padding: "44px clamp(20px,5vw,40px) 30px",
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* AR mark */}
          <div
            className="flex items-center justify-center"
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              border: "1px solid var(--border)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 19,
              letterSpacing: 1,
              color: "var(--text)",
              background: "var(--surface)",
            }}
          >
            AR
          </div>

          {/* Right block */}
          <div className="flex flex-col items-end gap-[14px]">
            <div className="flex flex-col items-end gap-[3px]">
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "var(--text)",
                }}
              >
                Aldila Rochidias
              </div>
              <div style={{ fontSize: 13.5, color: "var(--muted)" }}>
                <span
                  key={roleIndex}
                  style={{
                    color: "var(--accent)",
                    fontWeight: 600,
                    display: "inline-block",
                    animation: "role-in .5s ease both",
                  }}
                >
                  {ROLES[roleIndex]}
                </span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-[10px]">
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center hover:bg-[var(--surface)]"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  transition: "background .2s, border-color .2s",
                }}
              >
                <GitHubIcon />
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center hover:bg-[var(--surface)]"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  transition: "background .2s, border-color .2s",
                }}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="text-center"
          style={{
            marginTop: 34,
            paddingTop: 22,
            borderTop: "1px solid var(--border)",
            fontSize: 13,
            color: "var(--faint)",
          }}
        >
          &copy; {new Date().getFullYear()} Aldila Rochidias. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
