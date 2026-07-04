export const SOCIAL = {
  github: "https://github.com/vozaldi",
  linkedin: "https://www.linkedin.com/in/vozaldi",
  email: "vozaldi@gmail.com",
} as const;

export const ROLES = [
  "Frontend Engineer",
  "AI Engineer",
  "Backend Engineer",
  "Automation Engineer",
  "React Native Engineer",
  "Full Stack Engineer",
] as const;

export const STATS = [
  { value: "10+", label: "Years building" },
  { value: "20+", label: "Projects shipped" },
  { value: "iOS · Android", label: "Live on stores" },
  { value: "RAG · Agents", label: "AI-native now" },
] as const;

export const SKILLS = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS", "SCSS"] },
  { label: "Backend", items: ["Laravel", "PHP", "REST APIs", "WebSocket", "Microservices"] },
  { label: "Mobile", items: ["React Native", "Expo", "FCM", "WebRTC", "Maps"] },
  { label: "Data", items: ["MySQL", "PostgreSQL", "Query tuning"] },
  { label: "DevOps", items: ["Docker", "CI/CD", "AWS", "Cloudflare", "Nginx", "Linux"] },
  { label: "AI & Automation", items: ["RAG", "OpenAI", "Pinecone", "SSE streaming", "Agents"] },
] as const;

export const EXPERIENCE = [
  {
    period: "Jun 2022 — Present",
    role: "Mobile Application Developer",
    company: "CV. Sakti Mulya",
    desc: "Traditional Japanese therapy chain with 50+ branches. Built the “Healing by Nakamura” mobile apps (+3 others), a self-hosted POS & inventory system, delivered the UI/UX, and maintained the company ERP and websites.",
  },
  {
    period: "Nov 2020 — Dec 2021",
    role: "Full Stack Developer",
    company: "PT. Digsa",
    desc: "Building Management System tracking component usage and reliability — built both frontend and backend (React, Laravel), QR-code field scanning, and photo-verified task completion; designed the mobile UI/UX.",
  },
  {
    period: "Aug 2019 — Mar 2020",
    role: "Application Developer",
    company: "PT. Korina Prima Sinergi",
    desc: "Cross-platform tour & travel booking app serving 3 language markets (EN/ID/KR) — OAuth social login, a multi-step booking workflow, and multi-currency pricing with dynamic exchange rates.",
  },
  {
    period: "Sep 2017 — Jul 2019",
    role: "Full Stack Developer",
    company: "NonCreative",
    desc: "Built PSYLine.id, an online psychology consultation platform connecting patients and professional psychologists — Laravel and ReactJS with real-time WebSocket live chat.",
  },
  {
    period: "Jan 2015 — Dec 2016",
    role: "Web Programmer",
    company: "Gravis Design",
    desc: "Custom WordPress templates and plugins, PSD-to-WP conversions into responsive pages, and maintenance of in-production websites.",
  },
] as const;

export const SHOWCASE_PRODUCTS = [
  "Berkarir",
  "Morita Getall",
  "AkTekstil",
  "Magnetix.id",
  "OKDoct",
  "Befree Tour",
] as const;

export const FEATURED_PROJECTS = [
  { name: "Berkarir", tagline: "White-label LMS cloned across 5 exam-prep sectors.", hasScreenshot: true, mark: "BK" },
  { name: "Nakamaru", tagline: "AI knowledge assistant with RAG + semantic search.", hasScreenshot: false, mark: "NK" },
  { name: "OKDoct", tagline: "Telemedicine — real-time chat and video calls.", hasScreenshot: true, mark: "OK" },
  { name: "AkTekstil", tagline: "IoT control room for a textile factory.", hasScreenshot: true, mark: "AK" },
] as const;

export type ProjectData = {
  name: string;
  tagline: string;
  role: string;
  period: string;
  stack: string[];
  hasScreenshot: boolean;
  mark: string;
  shotCount?: number;
};

export const PROJECTS: ProjectData[] = [
  { name: "Nakamaru", tagline: "AI-powered company knowledge assistant — RAG pipeline, semantic vector search, and SSE streaming chat across 14 knowledge domains.", role: "Full Stack Developer", period: "2025", stack: ["Laravel 12", "OpenAI GPT-4o", "Pinecone", "MySQL"], hasScreenshot: false, mark: "NK" },
  { name: "AkTekstil", tagline: "IoT monitoring & control for factory electrical infrastructure — 28+ devices, 3-phase metrics, automated logging, and energy cost analytics.", role: "Backend Developer", period: "2024", stack: ["Laravel 11", "MySQL", "Sanctum", "Docker"], hasScreenshot: true, mark: "AK", shotCount: 3 },
  { name: "BPBD Command Center", tagline: "Regional disaster management platform — geospatial incident mapping, early-warning broadcasts, resource tracking, and a mobile API with Excel reporting.", role: "Full Stack Developer", period: "2024", stack: ["Laravel", "Sanctum", "Chart.js", "Maps"], hasScreenshot: false, mark: "BP" },
  { name: "OKDoct", tagline: "Telemedicine app — real-time chat, WebRTC video calls, five payment gateways, and digital prescriptions with offline-capable state.", role: "Mobile App Developer", period: "2021 — 2022", stack: ["React Native", "WebRTC", "Firebase FCM"], hasScreenshot: true, mark: "OK", shotCount: 3 },
  { name: "Morita Getall", tagline: "Bilingual mobile e-commerce for cleaning products — reseller tiers, Rupiah formatting, and Google Maps delivery; shipped to both stores.", role: "Mobile App Developer", period: "2021 — 2022", stack: ["React Native", "Google Maps", "Redux"], hasScreenshot: true, mark: "MG", shotCount: 3 },
  { name: "Magnetix.id", tagline: "Concert ticketing platform — interactive SVG seat maps, transactional seat locking, barcode validation, and PDF ticket generation.", role: "Full Stack Developer", period: "2018", stack: ["Laravel", "SVG", "PDF", "Barcode"], hasScreenshot: true, mark: "MX", shotCount: 3 },
  { name: "Befree Tour", tagline: "Multi-language, multi-currency travel booking app — 3 markets, 10 currencies, social login, and a guarded multi-step booking flow.", role: "Application Developer", period: "2019 — 2020", stack: ["Angular", "Cordova", "JWT", "i18n"], hasScreenshot: true, mark: "BF", shotCount: 3 },
  { name: "Joglos", tagline: "Multi-tenant facility management platform — 4-tier RBAC, QR asset tagging, maintenance ticketing, and role-specific analytics dashboards.", role: "Full Stack Developer", period: "2020 — 2021", stack: ["ReactJS", "React Native", "Laravel"], hasScreenshot: false, mark: "JG" },
  { name: "Ella Skin Care", tagline: "Clinic operations platform + e-commerce — 103 migrations, role-based admin dashboard, payment/shipping, and document management.", role: "Full Stack Developer", period: "2022 — 2023", stack: ["Laravel 10", "Next.js", "Xendit", "Spatie"], hasScreenshot: false, mark: "EL" },
  { name: "DotA Match Notifier", tagline: "Real-time match polling with an 8-stage AI defeat-analysis pipeline, fantasy scoring, and multi-platform notifications.", role: "Full Stack Developer", period: "2025", stack: ["Laravel 12", "Filament", "OpenAI", "Telegram Bot"], hasScreenshot: false, mark: "D2" },
];

export const BERKARIR_SECTORS = [
  { code: "ASN", name: "Civil Servant", note: "CPNS / CASN selection — TWK · TIU · TKP" },
  { code: "Berkuliah", name: "University Entrance", note: "SNBT & Ujian Mandiri, IRT adaptive testing" },
  { code: "BI", name: "Bank Indonesia", note: "PCPM recruitment preparation" },
  { code: "BUMN", name: "State-Owned Enterprise", note: "RBB recruitment — AKHLAK, TWK, TBI" },
  { code: "OJK", name: "Financial Services Authority", note: "PCPM banking & regulation exams" },
] as const;

export const BERKARIR_STACK = ["Next.js 15", "React 19", "TypeScript", "Zustand", "Tailwind 4", "Docker · CI/CD"];

export const ORBIT_CHIPS = [
  { label: "Laravel", ring: "outer", position: "top" },
  { label: "Next.js", ring: "outer", position: "bottom" },
  { label: "TypeScript", ring: "outer", position: "left" },
  { label: "React Native", ring: "inner", position: "top" },
  { label: "OpenAI", ring: "inner", position: "bottom" },
] as const;
