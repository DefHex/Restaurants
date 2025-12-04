import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/Restaurants.tsx"),
route("restaurant", "routes/restaurant.tsx"),
route("cafe", "routes/cafe.tsx"),
] satisfies RouteConfig;
