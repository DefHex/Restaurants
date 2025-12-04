import type { Route } from "./+types/restaurant";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function restaurant() {
  return <>Welcome to the Restaurant Page</>;
}
