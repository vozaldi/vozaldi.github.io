import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout('./layouts/PublicLayout.tsx', [
    index("ui-public/routes/home.tsx"),
    route("projects", "ui-public/routes/projects.tsx"),
  ]),
] satisfies RouteConfig;
