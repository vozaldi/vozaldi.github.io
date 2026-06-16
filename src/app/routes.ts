import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [
  // Public Layout
  layout('./layouts/PublicLayout.tsx', [
    // Welcome
    index("ui-public/routes/home.tsx"),
  ]),
] satisfies RouteConfig;
