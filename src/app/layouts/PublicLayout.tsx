import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Starfield from "../components/Starfield";
import { useTheme } from "../hooks/useTheme";

export default function PublicLayout() {
  useTheme();

  return (
    <div
      className="relative"
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)",
        fontFamily: "var(--font-sans)",
        transition: "background .45s ease, color .45s ease",
        overflowX: "hidden",
      }}
    >
      <Starfield />
      <div className="relative z-1">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
