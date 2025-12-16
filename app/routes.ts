import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("restaurant", "routes/restaurant.tsx"),
  route("bar", "routes/bar.tsx"),
  route("buffet", "routes/buffet.tsx"),
] satisfies RouteConfig;
